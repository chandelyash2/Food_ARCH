import { GraphQLObjectType } from 'graphql'
import ErrorType from '@server/gateway/rooms/types/Error'
import { FoodItemType } from './FoodItem'

export const FoodItemPaylaod = new GraphQLObjectType({
  name: 'FoodItemPayload',
  fields: () => ({
    food: {
      type: FoodItemType,
    },
    error: {
      type: ErrorType,
    },
  }),
})
