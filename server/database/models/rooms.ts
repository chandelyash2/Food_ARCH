import { Schema, model } from 'mongoose'

export type room = {
  _id: string
  name: string
}

const RoomSchema = new Schema<room>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
)

export const roomModel = model('rooms', RoomSchema)
