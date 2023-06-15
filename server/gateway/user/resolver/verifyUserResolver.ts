import { findUser } from '@server/database/operations/user'
import { otpExpired } from '../error'
import { UserModel } from '@server/database/models/user'
import { signToken } from '@server/services/authJwt'

export default async (_unkown, args: { otp: number; email: string }) => {
  const user = await findUser({ email: args.email })
  const isOtpExpired = otpExpired(user, args.otp)
  if (isOtpExpired) {
    return {
      error: isOtpExpired,
    }
  }
  await UserModel.updateOne({ email: args.email }, { 'otp.status': true })
  const token = signToken(user)
  return {
    user: user,
    token: token,
  }
}
