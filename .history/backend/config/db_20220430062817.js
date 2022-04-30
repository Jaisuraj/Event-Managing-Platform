const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://eventproject:<password>@cluster0-shard-00-00.y7k94.mongodb.net:27017,cluster0-shard-00-01.y7k94.mongodb.net:27017,cluster0-shard-00-02.y7k94.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-8uv080-shard-0&authSource=admin&retryWrites=true&w=majority", {
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