const router = require("express").Router();
const ServerModel = require("../models/Server.model");
const protectRoute = require("../middlewares/protectRoute");

router.get("/", (req, res, next) => {});

router.post("/", (req, res, next) => {
  ServerModel.create(req.body)
    .then((server) => res.status(200).json(server))
    .catch((e) => console.log(e));
});

module.exports = router;
