import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { buildSchema } from 'graphql';
import mongoose from 'mongoose';

import query from './server/schema/schema.js';
const schema = query

mongoose.connect(process.env.MONGODB_URL)
mongoose.connection.once('open', () => {
  console.log('db connected')
})

const app = express();

// make middleware
app.all('/graphql', createHandler({
  schema,
  graphiql: true
}));

app.listen(4000, 'localhost', () => {
  console.log('listening port 4000')
})
