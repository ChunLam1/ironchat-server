const { Schema, model } = require("mongoose");

const serverSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    participants: {
      type: Array,
      required: true,
    },
    messages: {
      type: Array,
    },
    admins: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Server", serverSchema);
