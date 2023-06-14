import { FoodCategoryType, FoodItemType } from '@server/generated/graphql'

export const categoryAlredayexist = (food: FoodCategoryType) => {
  if (food) {
    return {
      code: 'ALREADY_EXIST',
      message: 'Category Already Exist',
    }
  }
}
export const categoryNotExist = (food: FoodCategoryType) => {
  if (!food) {
    return {
      code: 'NOT_EXIST',
      message: 'Category Not Exist',
    }
  }
}

export const itemExist = (food: FoodItemType) => {
  if (food) {
    return {
      code: 'ALREADY_EXIST',
      message: 'Item Already Exist',
    }
  }
}
