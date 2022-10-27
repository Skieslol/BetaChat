const electron = require("electron");
const { join } = require("path");
const { existsSync, mkdirSync } = require("fs");

const original = process.env.ORIGINAL_PRELOAD;
const BetaDir = join(process.env.LOCALAPPDATA, "Beta");
const IconsDir = join(BetaDir, "Icons");
const BuildDir = join(BetaDir, "Builds");

const Logger = require("../utils/console/Logger");
const url = require("url");
const updater = require("../core/updater");

require("./app/buildInfo");

if (!existsSync(BetaDir)) mkdirSync(BetaDir);
if (!existsSync(IconsDir)) mkdirSync(IconsDir);
if (!existsSync(BuildDir)) mkdirSync(BuildDir);

module.exports = new (class ElectronBrowserWindow {
  constructor(
    options = {
      actions: {
        preload: {},
        BrowserWindow: electron.BrowserWindow,
        patcher: updater,
      },
    }
  ) {
    function createWindow() {
      const window = new electron.BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
          preload: join(__dirname, "../", "renderer", "preload.js"),
          sandbox: false,
        },
      });

      window.loadURL(
        url.format({
          pathname: join(__dirname, "..", "ui", "index.html"),
          protocol: "file:",
          slashes: true,
        })
      );
    }

    electron.app.whenReady().then(() => {
      createWindow();

      electron.app.on("activate", () => {
        if (electron.BrowserWindow.getAllWindows().length === 0) {
          createWindow();
        }
      });
    });
    if (
      (options.actions.preload =
        original ?? options.actions.BrowserWindow ?? options.actions.patcher)
    ) {
      process.env.PATH = electron.app.getAppPath();
    }
    Logger.Log(options);
  }
})();
