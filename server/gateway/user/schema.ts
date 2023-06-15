import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql'
import signupResolver from './resolver/signupResolver'
import { SignupInputType } from './types/SignupInput'
import { SignupPayloadType } from './types/SignupPayload'
import verifyUserResolver from './resolver/verifyUserResolver'

export const userMutation = {
  signUp: {
    type: SignupPayloadType,
    args: {
      input: {
        type: SignupInputType,
      },
    },
    resolve: signupResolver,
  },
  verifyUser: {
    type: SignupPayloadType,
    args: {
      otp: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: verifyUserResolver,
  },
}
