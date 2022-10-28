const fs = require("fs");
const path = require("path");
const Logger = require("../utils/console/Logger");

exports.default = 0;

module.exports = class Settings {
  constructor(root) {
    this.path = path.join(root, "settings.json");

    try {
      this.lastSaved = fs.readFileSync(this.path);
      this.settings = JSON.parse(this.lastSaved);
    } catch (err) {
      this.lastSaved = "";
      this.settings = {};

      Logger.Error(err);
    }
    this.lastModified = this._lastModified();
  }

  _lastModified() {
    try {
      return fs.statSync(this.path).mtime.getTime();
    } catch (err) {
      Logger.Error(err);
      return 0;
    }
  }

  get(key, defaultValue = false) {
    if (this.settings.hasOwnProperty(key)) {
      return this.settings[key];
    }
    return defaultValue;
  }

  set(key, value) {
    this.settings[key] = value;
  }

  save() {
    if (this.lastModified && this.lastModified !== this._lastModified()) {
      Logger.Log("Not saving settings, it has been externally modified.");
      return;
    }

    try {
      const toSave = JSON.stringify(this.settings, null, 2);

      if (this.lastSaved != toSave) {
        this.lastSaved = toSave;

        fs.writeFileSync(this.path, toSave);
        this.lastModified = this._lastModified();
      }
    } catch (err) {
      Logger.Error("Failed to save settings: ", err);
    }
  }
};
