import {
  MuttaionSignUpArgs,
  SignupPayloadType,
  UserType,
} from '@server/generated/graphql'
import sendSignupEmail from '@server/services/email/sendSignupEmail'
import { UserExist, isValidEmailError } from '../error'
import { findUser } from '@server/database/operations/user'
import { otpGenerator } from '@server/services/otpGenerator'
import { UserModel } from '@server/database/models/user'

export default async (
  _: unknown,
  args: MuttaionSignUpArgs,
): Promise<SignupPayloadType> => {
  try {
    const { email, role } = args.input

    const checkEmail = isValidEmailError(email)
    if (checkEmail) {
      return {
        error: checkEmail,
      }
    }
    const user = await findUser({ email: email })

    const isUserExits = UserExist(user)
    if (isUserExits) {
      return {
        error: isUserExits,
      }
    }
    const otp = otpGenerator()
    const input = {
      email,
      role,
      otp: {
        value: otp,
      },
    }

    await new UserModel(input).save()
    const newUser = await findUser({ email: email })
    const sendVerifyEmail = sendSignupEmail(email, otp)

    if (sendVerifyEmail) {
      return {
        user: newUser,
        success: 'Otp sent',
      }
    }
  } catch (error) {
    return error
  }
}
