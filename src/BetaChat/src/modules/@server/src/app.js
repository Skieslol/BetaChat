const express = require("express");
const { listen } = express();

const { port, database } = require("./configuration/env.json");
const mongoose = require("mongoose");

const WebSocket = require("ws");
const Logger = require("../../../utils/console/Logger");
const ws = new WebSocket.Server({ port: process.env.PORT || 8080 }, console.log("WebSocket Started on Port 8080"));

mongoose.connect(database).then(console.log("Connected to Database"));

ws.on("connection", (client) => {
  console.log("A User has Connected to Beta");

  client.on("message", (message) => {
    let connection;

    [...ws.clients]
      .filter(c => c !== message)
      .forEach(c => c.send(connection ? message.toString() : message));
  });
});

ws.on("listening", () => {
  console.log("WebSocket is Listening...");
});

listen(port, () => {
  console.log(`             
    
    Starting on Port ${port}...
    `);
});