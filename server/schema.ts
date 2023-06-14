import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import { applyMiddleware } from 'graphql-middleware'
import { roomsMutation, roomsQuery } from './gateway/rooms/schema'
import { foodMutation, foodQuery } from './gateway/foodMenu/schema'
import { orderMutation } from './gateway/orders/schema'


const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...roomsQuery,
    ...foodQuery
  },
})


const mutation = new GraphQLObjectType({
  name: 'Muttaion',
  fields: {
    ...roomsMutation,
    ...foodMutation,
    ...orderMutation
  },
})

const schema = new GraphQLSchema({
  query,
  mutation
})

export default applyMiddleware(schema)
