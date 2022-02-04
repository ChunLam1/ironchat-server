const router = require("express").Router();
const UserModel = require("../models/User.model");
const protectRoute = require("../middlewares/protectRoute");
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => {
  UserModel.find()
    .then((user) => {
      res.status(200).json({ user: ":)" });
    })
    .catch((e) => console.error(e));
});

router.patch("/:id", (req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((newUser) => {
      const user = newUser.toObject();
      delete user.password;
      const newAuthToken = jwt.sign(user, process.env.TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: "5d",
      });
      res.status(200).json({ newAuthToken });
    })
    .catch((e) => console.log(e));
});

module.exports = router;
