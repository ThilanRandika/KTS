const express = require("express");
const {
  createRoadRoute,
  getAllRoadRoutes,
} = require("../controllers/roadRouteController");

const router = express.Router();

router.post("/", createRoadRoute);
router.get("/", getAllRoadRoutes);

module.exports = router;
