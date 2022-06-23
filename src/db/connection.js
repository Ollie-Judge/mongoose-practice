const mongoose = require("mongoose");

require("dotenv").config();

// const client = new MongoClient(process.env.MONGO_URI);

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("success, youre connected to the database");
  } catch (error) {
    console.log(error);
  }
};

// connection();

module.exports = /*{*/ connection /*, client }*/;
