const asyncHandler = require("express-async-handler");
const Map = require("../models/mapModel");

const mapData = async (req, res) => {
  const { mapname, location } = req.body;

  const mapdata = new Map({ mapname, location });

  const createMap = await mapdata.save();

  res.status(201).json(createMap);
};
module.exports = { mapData };
