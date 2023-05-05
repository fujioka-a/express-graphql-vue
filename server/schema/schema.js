import { buildSchema, GraphQLID, GraphQLInputObjectType, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import Movie from '../models/movie.js'
import Director from '../models/director.js'

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
})
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  // 関数に閉じ込めて、カプセル化している
  // TSはPrivateがあるが、JSはPrivateがないのでクロージャーする
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
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
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMovie: {
      type: MovieType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
      },
      resolve(parent, args) {
        let movie = new Movie({
          name: args.name,
          genre: args.genre
        })
        return movie.save()
      }
    }
  }
})
export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
