import { FoodItemType } from '@server/gateway/foodMenu/types/FoodItem'
import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'

export const OrderPlacedType = new GraphQLObjectType({
  name: 'OrderPlacedType',
  fields: () => ({
    item: {
      type: new GraphQLList(FoodItemType),
    },
    message: {
      type: GraphQLString,
    },
  }),
})
