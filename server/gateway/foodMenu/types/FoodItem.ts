import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { FoodCategoryType } from './FoodCategory'
import { findFoodCategory } from '@server/database/operations/foodCategory'

export const FoodItemType = new GraphQLObjectType({
  name: 'FoodItemType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    category: {
      type: FoodCategoryType,
      resolve: async (src) => {
        const item = await findFoodCategory({ _id: src.categoryId })
        return item
      },
    },
  }),
})
