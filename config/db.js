const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/userFeb");
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting database:", error.message);
  }
};

module.exports = connectToDB;
