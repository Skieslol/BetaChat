const Settings = require("../Settings");
const Paths = require("../Paths");

let settings;

function init() {
    settings = new Settings(Paths.getUserData());
}

function getSettings() {
    return settings;
}

module.exports = {
    init,
    getSettings
}