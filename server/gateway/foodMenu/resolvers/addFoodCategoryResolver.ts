import { foodCategoryModel } from '@server/database/models/foodCategory'
import {
  FoodCategoryPayload,
  FoodCategoryType,
  MuttaionAddFoodCategoryArgs,
} from '@server/generated/graphql'
import { categoryAlredayexist } from '../errors'

export default async (
  _: unknown,
  args: MuttaionAddFoodCategoryArgs,
): Promise<FoodCategoryPayload> => {
  const category: FoodCategoryType = await foodCategoryModel
    .findOne({ name: args.name })
    .lean()

  const isExist = categoryAlredayexist(category)
  if (isExist)
    return {
      error: isExist,
    }
  const addCategory = await new foodCategoryModel(args).save()

  return {
    food: addCategory.toJSON(),
  }
}
