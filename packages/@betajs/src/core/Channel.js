module.exports = class Channel {
  constructor(name, serverId, type, id, isPrivate) {
    this.name = name;
    this.serverId = serverId;
    this.type = type;
    this.id = id;
    this.isPrivate = isPrivate;
  }
  otherChannel(otherChannel) {
    if (typeof otherChannel !== "undefined") {
      if (otherChannel.id === this.id) {
        return true;
      } else {
        return false;
      }
    }
  }
};