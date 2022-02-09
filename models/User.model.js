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
    image: {
      type: String,
      default:
        "https://static.wikia.nocookie.net/mugenpedia/images/f/f8/200px-Patrick_Star.svg.png/revision/latest?cb=20130812201248&path-prefix=fr",
    },
    // friends:[{
    //   type: Schema.Types.ObjectId, ref: "User"
    // }]
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
