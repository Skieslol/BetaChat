const Logger = require("../utils/console/Logger");

module.exports = class Flags {
    constructor() {
        this.flags = new Set();
    }
    getSupported() {
        return Array.from(this.flags);
    }
    supports(feature) {
        return this.flags.has(feature);
    }
    declareSupported(feature) {
        if (this.supports(feature)) {
            return Logger.Error(`This feature is already declared, is this a duplicate flag? ${feature}`);
        }
        this.flags.add(feature);
    }
}