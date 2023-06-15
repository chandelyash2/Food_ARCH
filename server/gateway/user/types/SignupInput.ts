import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'
import { UserRoleEnum } from './User'

export const SignupInputType = new GraphQLInputObjectType({
  name: 'SignupInputType',
  fields: () => ({
    email: {
      type: GraphQLString,
    },
    mobile: {
      type: GraphQLString,
    },
    role: {
      type: new GraphQLNonNull(UserRoleEnum),
    },
  }),
})
