import { UserType } from '@server/generated/graphql'
import { UserModel } from '../models/user'

export const findUser = async (
  filter: Record<string, string>,
): Promise<UserType> => {
  const res: UserType = await UserModel.findOne(filter).lean()
  return res
}
