import { Schema, model } from 'mongoose'

export type admin = {
  _id: string
  restaurantName: string
  hostName: string
  mobile: string
  email: string
  address: {
    address1: string
    district: string
    state: string
    pinCode: string
  }
}

export const AdminSchema = new Schema<admin>({
  restaurantName: {
    type: String,
    unique: true,
    required: true,
  },
  hostName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  mobile: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    address1: {
      type: String,
      unique: true,
      required: true,
    },
    district: {
      type: String,
      unique: true,
      required: true,
    },
    state: {
      type: String,
      unique: true,
      required: true,
    },
    pinCode: {
      type: String,
      unique: true,
      required: true,
    },
  },
})

export const adminModel = model('admin', AdminSchema)
