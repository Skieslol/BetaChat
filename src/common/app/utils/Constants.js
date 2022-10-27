const appSettings = require("../appSettings");
const { channel } = require("../buildInfo");
const settings = (0, appSettings.getSettings())();

function capitalizeFirstLetter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const appNameSuffix =
  channel === "development" ? "" : capitalizeFirstLetter(channel);
const APP_DESCRIPTION = "Beta - [Discord Soon]";
const APP_NAME = "Beta";
const APP_NAME_FOR_HUMANS = "Beta" + appNameSuffix;
const APP_ID_BASE = "com.squirrel";
const APP_ID = `${APP_ID_BASE}.${APP_NAME}.${APP_NAME}`;
const APP_PROTOCOL = "Beta";
const API_ENDPOINT = settings.get("API_ENDPOINT") || "https://localhost/api";
const UPDATE_ENDPOINT = settings.get("UPDATE_ENDPOINT") || API_ENDPOINT;
const NEW_UPDATE_ENDPOINT =
  settings.get("NEW_UPDATE_ENDPOINT") || "https://localhost/updates";
const bootstrapConstants = {
  APP_DESCRIPTION,
  APP_NAME,
  APP_NAME_FOR_HUMANS,
  APP_ID,
  APP_PROTOCOL,
  API_ENDPOINT,
  NEW_UPDATE_ENDPOINT,
  UPDATE_ENDPOINT,
};

module.exports = bootstrapConstants;