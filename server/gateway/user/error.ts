/* eslint-disable no-control-regex */
import { ErrorType, UserType } from '@server/generated/graphql'
import moment from 'moment'
export const isEmail = (string: string): boolean => {
  const isEmailRegExp = new RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  )

  return isEmailRegExp.test(string)
}

export const UserExist = (user: UserType): ErrorType => {
  if (user) {
    return {
      message: 'User Already Exist',
      code: 'ALREADY_EXIST',
    }
  }
}
export const UserNotExist = (user: UserType): ErrorType => {
  if (!user) {
    return {
      message: 'User Not Exist',
      code: 'NOT_EXIST',
    }
  }
}

export const isValidEmailError = (email: string): ErrorType => {
  if (!isEmail(email)) {
    return {
      message: 'This is not a valid email',
      code: 'NOT_VALID_EMAIL',
    }
  }
}
export const otpExpired = (user: UserType, otp: number) => {
  if (otp !== user.otp.value) {
    return {
      message: 'Invalid OTP',
      code: 'INVALID_OTP',
    }
  }
  const currentTime = moment(new Date()).format('YYYY-MM-DD HH:mm')
  const otpCreated = moment(user.otp.createdAt).format('YYYY-MM-DD HH:mm')
  const diff = moment.duration(moment(currentTime).diff(otpCreated))
  const duration = diff.asMinutes()
  if (duration > 15) {
    return {
      message: 'The otp is expired',
      code: 'OTP_EXPIREd',
    }
  }
}
