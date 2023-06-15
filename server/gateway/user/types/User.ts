import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { GraphQLDateTime } from 'graphql-scalars'

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
export const otpType = new GraphQLObjectType({
  name: 'OTPType',
  fields: () => ({
    value: {
      type: GraphQLInt,
    },
    status: {
      type: GraphQLBoolean,
    },
    createdAt: {
      type: GraphQLDateTime,
    },
  }),
})
export const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    _id: {
      type: GraphQLID,
    },
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
    otp: {
      type: otpType,
    },
  }),
})
