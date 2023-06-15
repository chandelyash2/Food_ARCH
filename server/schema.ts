import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { applyMiddleware } from 'graphql-middleware'
import { roomsMutation, roomsQuery } from './gateway/rooms/schema'
import { foodMutation, foodQuery } from './gateway/foodMenu/schema'
import { orderMutation } from './gateway/orders/schema'
import { userMutation } from './gateway/user/schema'

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...roomsQuery,
    ...foodQuery,
  },
})

const mutation = new GraphQLObjectType({
  name: 'Muttaion',
  fields: {
    ...userMutation,
    ...roomsMutation,
    ...foodMutation,
    ...orderMutation,
  },
})

const schema = new GraphQLSchema({
  query,
  mutation,
})

export default applyMiddleware(schema)
