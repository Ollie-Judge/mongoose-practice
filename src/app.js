require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, deleteMovie } = require("./movies/movieMethods");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log(await listMovies());
    } else if (yargsObj.list) {
      console.log(await listMovies());
    } else if (yargsObj.deleteMovie) {
      // Call --deleteMovie in terminal
      await deleteMovie();
      console.log(await listMovies());
    } else {
      console.log("Incorrect command");
    }
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
