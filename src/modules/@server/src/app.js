const express = require("express");
const { listen } = express();

const { port, database } = require("./configuration/env.json");
const mongoose = require("mongoose");

const WebSocket = require("ws");
const ws = new WebSocket.Server({ port: process.env.PORT || 8080 }, console.log("WebSocket Started on Port 8080"));

mongoose.connect(database).then(console.log("Connected to Database"));

ws.on("listening", () => {
  console.log("WebSocket is Listening...");
});

listen(port, () => {
  console.log(`             
    
    Starting on Port ${port}...
    `);
});