const colors = {
    "White": `\x1b[0m`,
    "Bright": `\x1b[1m`,
    "Green": `\x1b[32m`,
    "Blue": `\x1b[34m`,
    "Yellow": `\x1b[33m`,
    "Red": `\x1b[31m`,
    "Cyan": `\x1b[36m`,
    "Bright": `\x1b[1m`,
};

module.exports = {
    Updater(msg){
        console.log(`${colors.Yellow}[PATCHER]${colors.White}`, msg)
    },
    Error(msg){
        console.log(`${colors.Red}[ERROR]${colors.White}`, msg)
    },
    Log(msg){
        console.log(`${colors.Green}[LOGGER]${colors.White}`, msg)
    },
    Preload(msg){
        console.log(`${colors.Bright}${colors.Blue}[PRELOAD]${colors.White}`, msg);
    }
}