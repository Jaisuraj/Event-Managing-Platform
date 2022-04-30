const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://eventproject:Eventproject2022@cluster0.y7k94.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;