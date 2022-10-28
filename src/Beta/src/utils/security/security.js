const electron = require("electron");
const url = require("url");

const BLOCKED_URL_PROTOCOLS = [
  "file:",
  "javascript:",
  "vbscript:",
  "data:",
  "about:",
  "chrome:",
  "ms-cxh:",
  "ms-cxh-full:",
  "ms-word:",
];

function shouldOpenExternalUrl(externalUrl) {
    let parsedUrl;

    try {
        parsedUrl = url.parse(externalUrl);
    } catch (_) {
        return false;
    }
}

function saferShellOpenExternal(externalUrl) {
    if (shouldOpenExternalUrl(externalUrl)) {
        return electron.shell.openExternal(externalUrl);
    } else {
        return Promise.reject(new Error("External url open request blcoked"));
    }
}

function checkUrlOriginMatches(urlA, urlB) {
    let parsedUrlA;
    let parsedUrlB;

    try {
        parsedUrlA = url.parse(urlA);
        parsedUrlB = url.parse(urlB);
    } catch (_) {
        return false;
    }
    return parsedUrlA.protocol === parsedUrlB.protocol && parsedUrlA.slashes === parsedUrlB.slashes && parsedUrlA.host === parsedUrlB.host;
}