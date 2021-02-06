const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/xshopDB",{ useUnifiedTopology: true, useNewUrlParser: true });
// `${process.env.MONGOURI}`;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGOURI}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
