const router = require("express").Router();
const ServerModel = require("../models/Server.model");
const protectRoute = require("../middlewares/protectRoute");
const MessageModel = require("../models/Message.model");
const User = require("../models/User.model");

router.get("/", (req, res) => {
  ServerModel.find()
    .then((server) => {
      res.status(200).json({ server });
    })
    .catch((e) => console.error(e));
});

// :id correspond au serverId
router.get("/:id/messages", async (req, res, next) => {
  try {
    const serverId = req.params.id;
    console.log(serverId);
    const messages = await MessageModel.find({
      serverId: req.params.id,
    })
      .populate("userId")
      .populate("serverId");
    // console.log(messages);
    res.status(200).json({ messages });
    // if (req.params.id === )
  } catch (e) {
    console.error(e);
  }
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
