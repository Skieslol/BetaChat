const { Client } = require("discord-rpc");
const { Error } = require("../console/Logger");

module.exports = new (class Connect {
  constructor() {
    const RPC = new Client({ transport: "ipc" });

    try {
      this.connect = function connect() {
        RPC.on("ready", () => {
          RPC.setActivity({
            state: "BetaChat - Desktop",
            details: "Beta - DEVELOPMENT",
            largeImageKey: "ab",
            largeImageText: "Chatting with Users Using Beta.",
            buttons: [
              {
                label: "Join Alpha",
                url: "https://github.com/Skieslol/BetaChat",
              },
            ],
          });
        });
        RPC.on("disconnected", this.reconnect);
        RPC.login({ clientId: "1035592347616022648" });
      }
    } catch (err) {
      Error(err);
      this.reconnect();
    }
  }
  reconnect() {
    return setTimeout(() => {
        this.connect();
    }, 1e4);
  }
  kill() {
    const RPC = new Client({ transport: "ipc" });
    RPC.destroy();
  }
})();
