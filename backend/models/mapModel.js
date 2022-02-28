const mongoose = require("mongoose");
const mapSchema = mongoose.Schema({
  mapname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Map = mongoose.model("Map", mapSchema);

module.exports = Map;
