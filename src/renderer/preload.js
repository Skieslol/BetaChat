const Logger = require("../utils/console/Logger");

window.onload = () => {
    Logger.Preload("Preload Started.");
    require("../core/updater");
}