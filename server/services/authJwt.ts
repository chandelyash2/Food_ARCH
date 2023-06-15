import jwt, { Secret } from 'jsonwebtoken'
import { Request } from 'express'
import { UserType } from '@server/generated/graphql'

const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET

export const signToken = (
  user: UserType,
  signOptions = { expiresIn: '90d' },
) => {
  const token = jwt.sign(
    {
      user: {
        id: user._id,
        email: user.email,
      },
    },
    JWT_TOKEN_SECRET,
    signOptions,
  )
  return token
}

export const checkToken = (token: string, JWT_SECRET: Secret): any => {
  return jwt.verify(token, JWT_SECRET)
}

export const parseJwt = (req): void => {
  const authorizationHeader = req.headers.authorization
  const token: string = authorizationHeader.replace('Bearer ', '')

  try {
    const jwtData = checkToken(token, JWT_TOKEN_SECRET)

    if (jwtData && jwtData.user) {
      req.user = jwtData.user
    } else {
      // console.log('not authorised')
      // authLogger.debug('Token was not authorized', { token });
    }
  } catch (err) {
    // console.log("err", err);
  }
}
