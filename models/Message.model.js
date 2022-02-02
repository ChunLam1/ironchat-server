const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		userId: {
			type: String,
			unique: true
		},
		content: {
            type: String
        },
	},
	{
		timestamps: true,
);

module.exports = model("User", userSchema);
