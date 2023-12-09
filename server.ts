const express = require("express");
const http = require("http");
require("dotenv").config();

import { Server } from "socket.io";
import { DrawLine } from "./types";

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
      console.log(`Frontend connected to socket at: ${new Date}`);
      
      socket.broadcast.emit("drawLine", {
        prevPoint,
        currentPoint,
        color,
        lineWidth,
      });
    }
  );
});

server.listen(3001, () => console.log(`Server listening on port 3001`));
