import { GraphQLObjectType } from 'graphql'
import { RoomType } from './Room'
import ErrorType from './Error'

export const RoomPayload = new GraphQLObjectType({
  name: 'RoomPayload',
  fields: () => ({
    room: {
      type: RoomType,
    },
    error: {
      type: ErrorType,
    },
  }),
})
