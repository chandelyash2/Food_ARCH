import { Schema, model } from 'mongoose'
import { Int } from 'mssql'

export enum ROLE_TYPE_ENUM {
  ADMIN = 'admin',
  USER = 'user',
}
export type user = {
  _id: string
  firstName: string
  lastName: string
  mobile: string
  email: string
  role: ROLE_TYPE_ENUM
  otp: {
    value: number
    status: boolean
  }
}

const UserSchema = new Schema<user>({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mobile: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
  },
  otp: {
    value: {
      type: Number,
    },
    status: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
    },
  },
})

export const UserModel = model('user', UserSchema)
