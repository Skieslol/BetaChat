function User(username, id, discriminator, avatar) {
    this.username = username;
    this.id = id;
    this.discriminator = discriminator;
    this.avatar = avatar;
};

const MentionUser = User.prototype.mention = function() {
    return "<@"+this.id+">";
};

const OtherUser = User.prototype.equals = function(otherUser) {
    if (typeof otherUser !== "undefined") {
        if (otherUser.id === this.id) {
            return true;
        } else {
            return false;
        }
    }
};

module.exports = {
    User,
    MentionUser,
    OtherUser
};