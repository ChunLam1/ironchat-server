const router = require("express").Router();
const ServerModel = require("../models/Server.model");
const protectRoute = require("../middlewares/protectRoute");

router.get("/", (req, res) => {
  ServerModel.find()
    .then((server) => {
      res.status(200).json({ server });
    })
    .catch((e) => console.error(e));  
});

router.post("/", (req, res, next) => {
  ServerModel.create(req.body)
    .then((server) => {
      console.log(req);
      res.status(200).json(server);
    })
    .catch((e) => console.log(e));
});

module.exports = router;
