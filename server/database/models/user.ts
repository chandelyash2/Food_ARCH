import { Schema, model } from 'mongoose'

export type user = {
  _id: string
  firstName: string
  lastName: string
  mobile: string
  email: string
  role: string
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
})

export const UserModel = model('user', UserSchema)
