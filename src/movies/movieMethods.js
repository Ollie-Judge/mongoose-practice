const mongoose = require("mongoose");
const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
  try {
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    return await Movie.find({});
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovies = async (movieObj) => {
  try {
    return await Movie.findOneAndUpdate(movieObj);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovies = async (movieObj) => {
  try {
    return await Movie.deleteOne(movieObj);
  } catch (error) {
    console.log(error);
  }
};
