const { BrowserWindow } = require("electron");
const EventEmitter = require("events");
const BW = require("../common/BrowserWindow");
const Settings = require("../common/Settings");
const { updater } = require("./updater");
const Server = require("../modules/@server/src/app");

module.exports = new class Beta {
    constructor() {
        Object.defineProperty(BW, BrowserWindow, { configurable: true });
        Object.defineProperty(Settings, null, { configurable: true });
        Object.defineProperty(updater, EventEmitter, { configurable: true });
        Object.defineProperty(Server, null, { configurable: true });
    }
}