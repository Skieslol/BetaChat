const { User } = require("./User");

module.exports = new (class Guild {
    constructor(region, ownerID, name, id, members) {
        this.region = region;
        this.ownerID = ownerID;
        this.name = name;
        this.id = id;
        this.members = members;

        for (x in members) {
            let _member = members[x].user;
            return this.members.push(new User(_member.username, _member.id, 
            _member.discriminator, _member.avatar));
        }
    }
})();
