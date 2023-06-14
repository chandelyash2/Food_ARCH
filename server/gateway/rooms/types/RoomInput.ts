import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'

export const RoomInput = new GraphQLInputObjectType({
  name: 'RoomInputType',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})
