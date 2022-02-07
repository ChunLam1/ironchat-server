const router = require("express").Router();
const ServerModel = require("../models/Server.model");
const protectRoute = require("../middlewares/protectRoute");
const MessageModel = require("../models/Message.model");

router.get("/", (req, res) => {
  ServerModel.find()
    .then((server) => {
      res.status(200).json({ server });
    })
    .catch((e) => console.error(e));
});

// :id correspond au serverId
router.get("/:id/messages", (req, res) => {
  MessageModel
    .find()
    .populate("serverId", "userId")
    .then((message) => res.status(200).json({ message }))
    .catch(e => console.error(e))
})

router.post("/", (req, res, next) => {
  ServerModel.create(req.body)
    .then((server) => {
      console.log(req);
      res.status(200).json(server);
    })
    .catch((e) => console.log(e));
});

module.exports = router;
