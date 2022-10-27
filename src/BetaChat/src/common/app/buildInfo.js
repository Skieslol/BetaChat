// not final product

const { writeFileSync } = require("fs");

let info = {
    current_build: '{"currentBuild": "v0.0.1"}',
    version: "v0.0.1",
    channel: "development"
}

writeFileSync(`${process.env.LOCALAPPDATA}/Beta/buildInfo.json`, `${info.current_build.toString()}`);

module.exports = info