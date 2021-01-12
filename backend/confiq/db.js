const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/xshopDB",{ useUnifiedTopology: true, useNewUrlParser: true });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/newgenDB", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
