import signupResolver from './resolver/signupResolver'
import { SignupInputType } from './types/SignupInput'
import { SignupPayloadType } from './types/SignupPayload'

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
}
