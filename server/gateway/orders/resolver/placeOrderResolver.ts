import { MuttaionPlaceOrderArgs } from '@server/generated/graphql'

export default async (_: unknown, args: MuttaionPlaceOrderArgs) => {
  console.log(args.input, 'args')
}
