import { roomModel } from '@server/database/models/rooms'
import { findRoom } from '@server/database/operations/room'
import { MuttaionCreateRoomArgs, RoomPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: MuttaionCreateRoomArgs,
): Promise<RoomPayload> => {
  try {
    const room = await findRoom({ name: args.name })
    const cretaeRoom = await new roomModel(args.name).save()
    return {
      room: cretaeRoom.toJSON(),
    }
  } catch (error) {
    console.log(error, 'errr')
    return {
      error: {
        message: error.message,
        code: 'SOMETHING_WENT_WRONG',
      },
    }
  }
}
