import { buildSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import Movie from '../models/movie.js'
import Director from '../models/director.js'


const MovieType = new GraphQLObjectType({
  name: 'Movie',
  // 関数に閉じ込めて、カプセル化している
  // TSはPrivateがあるが、JSはPrivateがないのでクロージャーする
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        return Director.findById(parent.directorId)
      }
    }
  })
})
const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return Movie.find({ directorId: parent.id })
      }
    }
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
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Director.findById(args.id)
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return Movie.find({})
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        return Director.find({})
      }
    },
  }
})
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMovie: {
      type: MovieType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        directorId: {type: GraphQLID}
      },
      resolve(parent, args) {
        let movie = new Movie({
          name: args.name,
          genre: args.genre,
          directorId: args.directorId
        })
        return movie.save()
      }
    },
    addDirector: {
      type: DirectorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve(parent, args) {
        let director = new Director({
          name: args.name,
          age: args.age
        })
        return director.save()
      }
    }
  }
})
export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
