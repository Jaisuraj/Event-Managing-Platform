const express = require("express");
const { mapData } = require("../controllers/mapControllers");
const router = express.Router();

router.route("/createeventnote").post(mapData);

module.exports = router;
