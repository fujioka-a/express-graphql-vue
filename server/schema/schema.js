import { buildSchema, GraphQLID, GraphQLInputObjectType, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import Movie from '../models/movie.js'

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  // 関数に閉じ込めて、カプセル化している
  // TSはPrivateがあるが、JSはPrivateがないのでクロージャーする
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: {type: GraphQLString}
  })
})
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Movie.findById(args.id)
      }
    }
  }
})

// module.export = new GraphQLSchema({
//   query: RootQuery
// })
export default new GraphQLSchema({
  query: RootQuery,
});
