const express = require("express");
const { listen } = express();

const { port } = require("./configuration/env.json");

listen(port, () => {
  console.log(`             
    
    
██████╗░███████╗████████╗░█████╗░
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗
██████╦╝█████╗░░░░░██║░░░███████║
██╔══██╗██╔══╝░░░░░██║░░░██╔══██║
██████╦╝███████╗░░░██║░░░██║░░██║
╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░╚═╝
    
    Starting on Port ${port}...
    `);
});