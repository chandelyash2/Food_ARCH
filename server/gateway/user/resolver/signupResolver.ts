import { MuttaionSignUpArgs } from '@server/generated/graphql'
import sendSignupEmail from '@server/services/email/sendSignupEmail'

export default async (_: unknown, args: MuttaionSignUpArgs) => {
  const { email, role } = args.input
  const createUser = sendSignupEmail(email, '1234')
  console.log(createUser, 'createuser')
  console.log(args.input, 'adminArgs')
}
