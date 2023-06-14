import { roomModel } from '../models/rooms'

export const findRoom = (filter) => {
  console.log(filter, 'filter')
  const room = roomModel.findOne(filter).lean()
  return room
}
