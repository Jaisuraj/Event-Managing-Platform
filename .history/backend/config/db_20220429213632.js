const mongoose = require("mongoose");
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js' // DB connection
import products from './data/products.js'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
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