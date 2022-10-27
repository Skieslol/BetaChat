import multi from "@rollup/plugin-multi-entry";

export default {
  input: [
    "src/core/index.js",
    "src/core/updater.js",
    "src/renderer/preload.js",
  ],
  output: {
    dir: "build"
  },
  plugins: [multi()],
};
