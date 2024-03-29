const { Schema, model } = require("mongoose");

const serverSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    participants: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    admins: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    imageUrl: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Server", serverSchema);
