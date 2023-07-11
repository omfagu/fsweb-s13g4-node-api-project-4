const express = require("express");
const server = express();
const router = require("./users/users-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1> app is working</h1>");
});

server.use("/api", router);

module.exports = server;
