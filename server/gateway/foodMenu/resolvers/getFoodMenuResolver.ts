import { foodItemModel } from '@server/database/models/foodItems'

export default async () => {
  const findItems = await foodItemModel.find({ status: true }).lean()
  return {
    items: findItems,
  }
}
