const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		name: {
			type: String,
			unique: true
		},
		participants: {
            type: Array
        }
	},
	{
		timestamps: true,
	}
);

module.exports = model("User", userSchema);
