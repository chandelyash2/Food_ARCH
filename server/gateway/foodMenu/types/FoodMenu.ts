import { GraphQLList, GraphQLObjectType } from 'graphql'
import { FoodItemType } from './FoodItem'

export const FoodMenuType = new GraphQLObjectType({
  name: 'FoodMenuType',
  fields: () => ({
    items: {
      type: new GraphQLList(FoodItemType),
    },
  }),
})
