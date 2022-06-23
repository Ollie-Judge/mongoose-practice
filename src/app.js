require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { listMovies } = require("./movies/movieMethods");

const {
  addMovie,
  listMovies,
  deleteMovies,
  updateMovies,
} = require("./src/movies/movieMethods");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      await addMovie({
        title: yargsObj.title,
        actor: yargsObj.actor,
        year: yargsObj.year,
        description: yargsObj.description,
      });
      console.log(await listMovies());
    } else if (yargsObj.list) {
      console.log(await listMovies());
    } else if (yargsObj.update) {
      await updateMovies({
        title: yargsObj.title,
        actor: yargsObj.actor,
        year: yargsObj.year,
        description: yargsObj.description,
      });
    } else if (yargsObj.delete) {
    } else {
      console.log("try a different command, the one you put is incorrect");
    }
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
