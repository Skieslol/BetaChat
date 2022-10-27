const { model, Schema } = require("mongoose");

const Channel = {
    id: String,
    name: String,
    summary: String,
    type: ChannelType,
};

const ChannelType = {
    Text: "TEXT"
};

const GuildDocument = {
    id: String,
    name: String,
    createdAt: Date,
    avatarURL: String,
    channel: Channel[""]
}

const guildSchema = model("guild", new Schema({
    id: String,
    name: String,
    createdAt: Date,
    avatarURL: String,
    channel: { type: Array, default: [] }
}));

const model = mongoose.model("GuildModel", guildSchema);

module.exports = {
	model,
	ChannelType,
	GuildDocument
}