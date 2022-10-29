const { User } = require("./User");

module.exports = new (class Message {
    constructor(time, author, content, channel, id, mentions) {
        this.time = Date.parse(time);
        this.author = new User(author.username, author.id,
            author.discriminator, author.avatar);
        this.content = content.replace(/<[^>]*>/g, "").replace(/\s+/g, "").trim();
        this.channel = channel;
        this.id = id;
        this.mentions = [];

        for (x in mentions) {
            let _mention = mentions[x];
            this.mentions.push(new User(
                _mention.username,
                _mention.discriminator,
                _mention.avatar
            ));
        }
    }
    isMentioned(user) {
        for (const mention of this.mentions) {
            if (user.equals(mention)) {
                return true;
            }
        }
    }
})();