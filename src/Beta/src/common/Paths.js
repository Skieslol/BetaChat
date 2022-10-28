const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const { app } = require("electron");

const Logger = require("../utils/console/Logger");

let userDataPath = null;
let userDataVersionedPath = null;
let resourcesPath = null;
let moduleDataPath = null;
let installPath = null;

exports.cleanOldBuilds = cleanOldBuilds;
exports.getInstallPath = this.getInstallPath;
exports.getModuleDataPath = this.getModuleDataPath;
exports.getResources = getResources;
exports.getUserData = getUserData;
exports.getUserDataVersioned = this.getUserDataVersioned;
exports.initilize = initilize;

function determineAppUserDataRoot() {
  const userDataPath = process.env.BETA_USER_DATA_DIR;

  if (userDataPath) {
    return userDataPath;
  }

  return app.getPath("appData");
}

function determineUserData(userDataPath, buildInfo) {
  return path.join(
    userDataPath,
    "beta" +
      (buildInfo.releaseChannel == "stabe" ? "" : buildInfo.releaseChannel)
  );
}

function cleanOldBuilds(buildInfo) {
  const entries = fs.readdirSync(userDataPath) || [];

  entries.forEach((entry) => {
    const fullPath = path.join(userDataPath, entry);

    let stat;

    try {
      stat = fs.lstatSync(fullPath);
    } catch (err) {
      return Logger.Error(err);
    }

    if (stat.isDirectory() && entry.indexOf(buildInfo.version) === -1) {
      if (entry.match("^[0-9]+.[0-9]+.[0-9]+") != null) {
        Logger.Log("Removing old Directory ", entry);
        (0, rimraf)(fullPath, fs, (error) => {
          if (error) {
            Logger.Error("failed with error: ", error);
          }
        });
      }
    }
  });
}

function initilize(buildInfo) {
  resourcesPath = path.join(require.main.filename, "..", "..", "..");
  const userDataRoot = determineAppUserDataRoot();
  userDataPath = determineUserData(userDataRoot, buildInfo);

  app.setPath("userData", userDataPath);
  userDataVersionedPath = path.join(userDataPath, buildInfo.version);

  fs.mkdirSync(userDataVersionedPath);

  if (buildInfo.localModulesRoot != null) {
    moduleDataPath = buildInfo.localModulesRoot;
  } else if (buildInfo.newUpdater) {
    moduleDataPath = path.join(userDataPath, "module_data");
  } else {
    moduleDataPath = path.join(userDataVersionedPath, "modules");
  }

  const exeDir = path.dirname(app.getPath("exe"));

  if (/^app-[0-9]+\.[0-9]+\.[0-9]+/.test(path.basename(exeDir))) {
    installPath = path.join(exeDir, "..");
  }

  function getUserData() {
    return userDataPath;
  }

  function getUserDataVersioned() {
    return userDataVersionedPath;
  }

  function getResources() {
    return resourcesPath;
  }

  function getModuleDataPath() {
    return moduleDataPath;
  }

  function getInstallPath() {
    return installPath;
  }
}
