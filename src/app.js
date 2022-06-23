require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movies/movieMethods");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      // type the comment below into the terminal to add a new movie
      // (node src/app.js --updateMovie --title="title goes here" --actor="Enter your new title here" --year="enter year here")
      await addMovie({
        title: yargsObj.title,
        actor: yargsObj.actor,
        year: yargsObj.year,
      });
      console.log(await listMovies());
    } else if (yargsObj.list) {
      // type the comment below into the terminal to update a movie
      // (node src/app.js  --list )
      console.log(await listMovies());
    } else if (yargsObj.updateMovie) {
      // type the comment below into the terminal to update a movie
      // ( node src/app.js --updateMovie --title="existing title goes here" --newTitle="Enter your new title here")
      await updateMovie({
        title: yargsObj.newTitle,
        actor: yargsObj.newActor,
        year: yargsObj.newYear,
      });
      console.log(await listMovies());
    } else if (yargsObj.deleteMovie) {
      // type the comment below into the terminal to delete the last movie that was entered
      // ( node src/app.js --deleteMovie)
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
