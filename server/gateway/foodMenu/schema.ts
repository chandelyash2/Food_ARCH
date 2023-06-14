import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'
import { FoodCategoryPaylaod } from './types/FoodCategoryPayload'
import addFoodcategoryResolver from './resolvers/addFoodCategoryResolver'
import { FoodItemPaylaod } from './types/FoodItemPayload'
import addFoodItemResolver from './resolvers/addFoodItemResolver'
import getFoodMenuResolver from './resolvers/getFoodMenuResolver'
import { FoodMenuType } from './types/FoodMenu'

export const foodQuery = {
  foodMenu: {
    type: new GraphQLNonNull( FoodMenuType),
    resolve: getFoodMenuResolver,
  },
}

export const foodMutation = {
  addFoodCategory: {
    type: FoodCategoryPaylaod,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: addFoodcategoryResolver,
  },
  addFoodItem: {
    type: FoodItemPaylaod,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      categoryId: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: addFoodItemResolver,
  },
}
