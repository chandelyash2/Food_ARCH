import { GraphQLList } from 'graphql'
import { OrderPlacedType } from './types/OrderPlaced'
import { OrderPlacedInputType } from './types/OrderPlacedInput'
import placeOrderResolver from './resolver/placeOrderResolver'

export const orderMutation = {
  placeOrder: {
    type: OrderPlacedType,
    args: {
      input: {
        type: new GraphQLList(OrderPlacedInputType),
      },
    },
    resolve: placeOrderResolver,
  },
}
