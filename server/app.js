import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { buildSchema } from 'graphql';


const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const app = express();

// make middleware
app.all('/graphql', createHandler({schema}));

app.listen(4000, 'localhost', () => {
  console.log('listening port 4000')
})
