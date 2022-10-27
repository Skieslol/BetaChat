const { model, Schema } = require("mongoose");

const UserDocument = {
	id: String,
	username: String,
	createdAt: Date,
	avatarURL: String,
	status: StatusType,
	friendId: { type: Array, default: [] }
}

const StatusType = {
	DND: "DND",
    IDLE: "IDLE",
    ONLINE: "ONLINE",
    OFFLINE: "OFFLINE"
}

const userSchema = model("user", new Schema({
	id: String,
    username: String,
    createdAt: Date,
    avatarURL: String,
	friendId: { type: Array, default: [] }
}));

const model = mongoose.model("UserModel", userSchema);

module.exports = {
	model,
	StatusType,
	UserDocument
}