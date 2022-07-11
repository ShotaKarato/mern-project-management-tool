const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`🚀 DB connected`.cyan.underline.bold);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = connect;
