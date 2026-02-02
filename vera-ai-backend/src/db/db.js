const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log("DB Error", error);
  }
};

module.exports = connectToDB;
