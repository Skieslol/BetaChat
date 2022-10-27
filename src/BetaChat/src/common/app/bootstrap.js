if (process.platform === "linx") {
    if (process.env.PULSE_LATENCY_MSEC === undefined) {
        process.env.PULSE_LATENCY_MSEC = 30;
    }
}

const { Menu, app } = require("electron");
const sentry = require("@sentry/node");
const buildInfo = require("./buildInfo");
const errorHandler = require("./handlers/errorHandler");
const appSettings = require("./appSettings");
const Logger = require("../../utils/console/Logger");

app.setVersion(buildInfo.version);

global.releaseChannel = buildInfo.channel;

errorHandler.init();
appSettings.init();

function setupHardwareAcceleration() {
    const settings = appSettings.getSettings();

    if (!settings.get("enableHardwareAcceleration", true)) {
        app.disableHardwareAcceleration();
    }
}

setupHardwareAcceleration();
app.allowRendererProcessReuse = false;

app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");
app.commandLine.appendSwitch("disable-features", "WinRetrieveSuggestionsOnlyOnDemand,HardwareMediaKeyHandling,MediaSessionService");

function hasArgvFlag(flag) {
    return (process.argv || []).slice(1).includes(flag);
}

Logger.Log(`[BETA] ${app.getVersion()}`);