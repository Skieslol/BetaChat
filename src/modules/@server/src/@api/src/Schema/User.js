const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
	{
        email: { type: String, required: true, unique: true },
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
        avatar: { type: String, required: false, },
        phoneNumber: { type: String, required: false, unique: true }
	},
	{ collection: "users" }
)

const model = mongoose.model("user", UserSchema)

module.exports = model