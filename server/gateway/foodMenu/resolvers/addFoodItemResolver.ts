import { findFoodCategory } from '@server/database/operations/foodCategory'
import {
  FoodItemPayload,
  MuttaionAddFoodItemArgs,
} from '@server/generated/graphql'
import { categoryNotExist, itemExist } from '../errors'
import { foodItemModel } from '@server/database/models/foodItems'

export default async (
  _: unknown,
  args: MuttaionAddFoodItemArgs,
): Promise<FoodItemPayload> => {
  const findCategory = await findFoodCategory({ _id: args.categoryId })
  const isExist = categoryNotExist(findCategory)
  if (isExist)
    return {
      error: isExist,
    }

  const findItem = await foodItemModel.findOne({ name: args.name }).lean()
  const iItemExist = itemExist(findItem)
  if (iItemExist) {
    return {
      error: iItemExist,
    }
  }
  const addItem = await new foodItemModel(args).save()
  return {
    food: addItem,
  }
}
