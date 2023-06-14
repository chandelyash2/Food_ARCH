import { Schema, model } from 'mongoose'

export type foodItem = {
  _id: string
  name: string
  status: boolean
  categoryId: Schema.Types.ObjectId
}
const FoodItemSchema = new Schema<foodItem>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'foodCategory',
    },
  },
  {
    timestamps: true,
  },
)
export const foodItemModel = model('foodItem', FoodItemSchema)
