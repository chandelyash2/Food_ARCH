import { GraphQLEnumType, GraphQLObjectType, GraphQLString } from 'graphql'

export const UserRoleEnum = new GraphQLEnumType({
  name: 'UserRoleEnum',
  values: {
    ADMIN: {
      value: 'admin',
    },
    USER: {
      value: 'user',
    },
  },
})
export const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    mobile: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    role: {
      type: UserRoleEnum,
    },
  }),
})
