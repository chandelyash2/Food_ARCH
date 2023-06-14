import { foodCategoryModel } from '../models/foodCategory'

export const findFoodCategory =  (filter) => {
  const res =  foodCategoryModel.findOne(filter).lean()
  return res
}
