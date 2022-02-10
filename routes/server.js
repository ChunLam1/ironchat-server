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

router.get("/:id", (req, res, next) => {
  console.log("I'm here");
  ServerModel.findById(req.params.id)
    .then((server) => res.status(200).json({ server }))
    .catch((e) => res.status(500).json({ error: e }));
});

router.post("/", (req, res, next) => {
  ServerModel.create(req.body)
    .then((server) => {
      res.status(200).json(server);
    })
    .catch((e) => console.log(e));
});

router.delete("/message/:id", (req, res, next) => {
  MessageModel.findByIdAndDelete(req.params.id)
    .then((response) => {
      console.log(response);
      res.status(204).json({ data: "message deleted" });
    })
    .catch((e) => next(e));
});

router.patch("/message/:id", (req, res, next) => {
  console.log(req);
  MessageModel.findByIdAndUpdate(req.params.id, req.body)
    .then((response) => {
      res.status(200).json({ data: "message updated" });
    })
    .catch((e) => next(e));
});

module.exports = router;
