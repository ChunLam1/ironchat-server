const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
	{
		userId: {
			type: String,
			unique: true
		},
		content: {
            type: String
        }
	},
	{
		timestamps: true,
	}
);

module.exports = model("Message", messageSchema);
