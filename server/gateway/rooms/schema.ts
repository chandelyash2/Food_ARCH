import { RoomPayload } from './types/RoomPayload'
import createRoomResolver from './resolvers/createRoomResolver'
import { RoomInput } from './types/RoomInput'

export const roomsQuery = {
  allRooms: {
    type: RoomPayload,
    resolve: () => {
      return {
        room: {
          id: '1222',
          name: 'sadasda',
        },
      }
    },
  },
}

export const roomsMutation = {
  createRoom: {
    type: RoomPayload,
    args: {
      name: {
        type: RoomInput,
      },
    },
    resolve: createRoomResolver,
  },
}
