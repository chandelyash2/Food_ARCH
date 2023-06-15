import { GraphQLObjectType, GraphQLString } from 'graphql'
import { UserType } from './User'
import ErrorType from '@server/gateway/rooms/types/Error'

export const UserPayloadType = new GraphQLObjectType({
  name: 'UserPayloadType',
  fields: () => ({
    user: {
      type: UserType,
    },
    token: {
      type: GraphQLString,
    },
    error: {
      type: ErrorType,
    },
  }),
})
