const Endpoints = require("./core/Endpoints");
const Guild = require("./core/Guild");
const User = require("./core/User");
const Message = require("./core/Message");
const request = require("superagent");
const WebSocket = require("ws");
const Channel = require("./core/Channel");

module.exports = class Client {
    constructor(options) {
        this.options = options || {};
        this.token = "";
        this.loggedIn = false;
        this.websocket = null;
        this.events = {};
        this.user = null;
        this.channelCache = {};
    }
    triggerEvent(event, args) {
        if (this.events[event]) {
            this.events[event].apply(this, args);
        } else {
            return false;
        }
    }
    on(name, fn) {
        this.events[name] = fn;
    }
    off(name) {
        this.events[name] = function() {};
    }
    cacheChannel(id, callback) {
        if (this.channelCache[id]) {
            callback(this.channelCache[id]);
            return;
        }

        let self = this;

        request.get(Endpoints.Channels + "/" + id)
            .set("authorization", this.token)
            .end(function(err, response) {
                let data = response.body;
                self.channelCache[id] = new Channel(
                    data.name,
                    data.guildId,
                    data.type,
                    data.id,
                    data.isPrivate
                );
            })
    }
    login(email, password, callback) {
        let client = this;

        let details = {
            email: email,
            password: password
        };

        request.post(Endpoints.Login)
            .send(details)
            .end(function(err, res) {
                if (!res.ok) {
                    callback(err);
                } else {
                    client.token = res.body.token;
                    client.loggedIn = true;
                    callback();
                    client.connectWebsocket();
                }
            })
    }
    connectWebsocket(callback) {
        //TODO(Skies): Connection Code
    }
};