const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		name: {
			type: String,
			unique: true
		},
		email: {
			type: String,
			unique: true
		},
		password: String
	},
	{
		timestamps: true,
	}
);

module.exports = model("User", userSchema);
