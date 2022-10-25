const { BrowserWindow, app } = require("electron");
const EventEmitter = require("events");
const BW = require("../common/BW");
const Settings = require("../common/Settings");
const { updater } = require("./updater");

module.exports = new class Beta {
    constructor() {
        Object.defineProperty(BW, BrowserWindow, { configurable: true });
        Object.defineProperty(Settings, null, { configurable: true });
        Object.defineProperty(updater, EventEmitter, { configurable: true });
    }
}