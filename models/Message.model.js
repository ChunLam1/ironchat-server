const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    serverId: {
      type: String,
      unique: true,
      required: true,
    },
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Message", messageSchema);
