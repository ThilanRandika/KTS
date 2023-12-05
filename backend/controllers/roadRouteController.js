const RoadRoute = require("../models/roadRouteModel");
const asyncHandler = require("express-async-handler");

const createRoadRoute = asyncHandler(async (req, res) => {
  const { rId, startLocation, googleRoute, stations } = req.body;
  const roadRoute = new RoadRoute({
    rId: "r1",
    startLocation,
    googleRoute,
    stations,
  });
  const createdRoadRoute = await roadRoute.save();
  res.status(201).json(createdRoadRoute);
});

const getAllRoadRoutes = asyncHandler(async (req, res) => {
  const roadRoutes = await RoadRoute.find({});
  res.json(roadRoutes);
});
module.exports = { createRoadRoute, getAllRoadRoutes };
