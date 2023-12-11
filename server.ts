const express = require("express");
const http = require("http");
require("dotenv").config();

import { Server } from "socket.io";
import { DrawLine, User } from "./types";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});


io.on("connection", (socket) => {
  socket.on(
    "drawLine",
    ({ prevPoint, currentPoint, color, lineWidth }: DrawLine) => {
      socket.broadcast.emit("drawLine", {
        prevPoint,
        currentPoint,
        color,
        lineWidth,
      });
    }
  );

  socket.on("ready", (newUser: User) => {
    socket.broadcast.emit("addNewUser", newUser)
  })

  socket.on("userLeft", (newUser: User) => {
    socket.broadcast.emit("removeUser", newUser);
  });

  socket.on("clear", () => {
    socket.broadcast.emit("clearBoard")
  })

});

server.listen(3001, () => console.log(`Server listening on port 3001`));
