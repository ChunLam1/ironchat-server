const router = require("express").Router();
const UserModel = require("../models/User.model");
const protectRoute = require("../middlewares/protectRoute");

router.get("/", (req, res) => {
  UserModel.find()
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((e) => console.error(e));
});

router.patch("/", (req, res, next) => {
  UserModel.findByIdAndUpdate( req.params.id, req.body)
    .then((user) => {
      console.log(req);
      res.status(200).json(user);
    })
    .catch((e) => console.log(e));
});

module.exports = router;
