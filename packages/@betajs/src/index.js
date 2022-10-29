const Endpoints = require("./core/Endpoints");
const Guild = require("./core/Guild");
const User = require("./core/User");
const Message = require("./core/Message");
const request = require("superagent");
const WebSocket = require("ws");

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
};