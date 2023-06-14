import { Schema, model } from 'mongoose'

export type foodCategory = {
  _id: string
  name: string
}

const FoodCategorySchema = new Schema<foodCategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
)

export const foodCategoryModel = model('foodCategory', FoodCategorySchema)
