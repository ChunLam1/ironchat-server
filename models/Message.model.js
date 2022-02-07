const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
    serverId: {
      type: Schema.Types.ObjectId,
      ref: "Server"
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
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
