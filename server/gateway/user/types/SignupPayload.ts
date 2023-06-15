import ErrorType from '@server/gateway/rooms/types/Error'
import { GraphQLObjectType, GraphQLString } from 'graphql'
import { UserType } from './User'

export const SignupPayloadType = new GraphQLObjectType({
  name: 'SignupPayloadType',
  fields: () => ({
    user: {
      type: UserType,
    },
    token: {
      type: GraphQLString,
    },
    success: {
      type: GraphQLString,
    },
    error: {
      type: ErrorType,
    },
  }),
})
