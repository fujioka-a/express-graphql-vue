import mongoose from 'mongoose';

const Schema = mongoose.Schema

const directorSchema = new Schema({
  name: String,
  age: Number
})

// module.exports = mongoose.model('Director', directorSchema)

const Director = mongoose.model('Director', directorSchema);

export default Director;
