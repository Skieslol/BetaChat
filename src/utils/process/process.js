const os = require("os");
const process = require("process");

function _getMajorVersion() {
    return process.versions.electron != null ? parseInt(process.versions.electron.split(".")[0]) : 0;
}

const IS_WIN = process.platform === "win32";
const IS_OSX = process.platform === "darwin";
const IS_LNX = process.platform === "linux";

function isWindowsVersionOrEarlier(major, minor) {
    if (!IS_WIN) {
        return false;
    }

    const osRelease = os.release();

    if (osRelease == null || typeof osRelease !== "string") {
        return false;
    }

    const [actualMajor, actualMinor] = osRelease.split(".").map(v => parseInt(v, 10));

    if (actualMajor < major) {
        return true;
    } else if (actualMajor === major && actualMinor <= minor) {
        return true;
    }

    return false;
}

function supportsTls13() {
    try {
        !isWindowsVersionOrEarlier(6, 1);
    } catch {
        return true;
    }
}