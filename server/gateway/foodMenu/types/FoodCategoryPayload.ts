import { GraphQLObjectType } from 'graphql'
import { FoodCategoryType } from './FoodCategory'
import ErrorType from '@server/gateway/rooms/types/Error'

export const FoodCategoryPaylaod = new GraphQLObjectType({
  name: 'FoodCategoryPayload',
  fields: () => ({
    food: {
      type: FoodCategoryType,
    },
    error: {
      type: ErrorType,
    },
  }),
})
