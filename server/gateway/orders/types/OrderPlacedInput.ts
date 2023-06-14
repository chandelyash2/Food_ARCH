import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql'

export const OrderPlacedInputType = new GraphQLInputObjectType({
  name: 'OrderPlacedInputType',
  fields: () => ({
    itemId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    quantity: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
})
