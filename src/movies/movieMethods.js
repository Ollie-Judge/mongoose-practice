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

exports.updateMovie = async (movieObj) => {
  try {
    await Movie.findOneAndUpdate(movieObj);
    console.log("The movie has been updated");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.deleteOne(movieObj);
    console.log(
      "The last movie that was entered has been deleted, the movies remaining in the database are below"
    );
  } catch (error) {
    console.log(error);
  }
};
