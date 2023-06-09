import mongoose from 'mongoose';

const Schema = mongoose.Schema

const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: String
})

// module.exports = mongoose.model('Movie', movieSchema)

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
