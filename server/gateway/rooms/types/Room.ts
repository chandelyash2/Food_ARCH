import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

export const RoomType = new GraphQLObjectType({
  name: 'RoomType',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: (src) => src._id,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
})
