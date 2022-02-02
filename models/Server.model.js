const { Schema, model } = require("mongoose");

const serverSchema = new Schema(
	{
		name: {
			type: String,
			unique: true
		},
		participants: {
            type: Array
        },
		messages: {
			type: Array
		},
		admins: {
			type: Array
		}
	},
	{
		timestamps: true,
	}
);

module.exports = model("Server", serverSchema);
