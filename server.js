// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

let users = {}; // { socket.id: username }

io.on("connection", (socket) => {
  console.log("✅ A user connected");

  // Handle user joining
  socket.on("join", (username) => {
    users[socket.id] = username;
    console.log(`${username} joined`);
    io.emit("user list", Object.values(users)); // send updated user list
  });

  // Handle chat messages
  socket.on("chat message", (data) => {
    const { sender, receiver, message } = data;

    if (receiver === "all") {
      // broadcast to everyone
      io.emit("chat message", { sender, message });
    } else {
      // private message
      const receiverSocket = Object.keys(users).find(
        (id) => users[id] === receiver
      );
      if (receiverSocket) {
        io.to(receiverSocket).emit("chat message", {
          sender,
          message: `(private) ${message}`,
        });
        // also show to sender
        socket.emit("chat message", {
          sender,
          message: `(to ${receiver}) ${message}`,
        });
      }
    }
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    const username = users[socket.id];
    console.log(`${username} disconnected`);
    delete users[socket.id];
    io.emit("user list", Object.values(users));
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
