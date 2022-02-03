const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
