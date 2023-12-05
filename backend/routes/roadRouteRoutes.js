const express = require("express");
const {
  createRoadRoute,
  getAllRoadRoutes,
} = require("../controllers/roadRouteController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createRoadRoute);
router.get("/", getAllRoadRoutes);

module.exports = router;
