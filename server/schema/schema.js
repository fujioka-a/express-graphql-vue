import { buildSchema, GraphQLID, GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from 'graphql';


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
const RootQuery = new GraphQLInputObjectType({
  name: 'RootQuerytype',
  fields: {
    type: MovieType,
    args: { id: { type: GraphQLID } },
    resolve(parents, args) {

    }
  }
})

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
