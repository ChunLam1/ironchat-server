module.exports = function (httpServer) {
  const { Server } = require("socket.io");

  const io = new Server(httpServer, {
    cors: {
      origin: process.env.FRONTEND_URL,
      // or with an array of origins
      // origin: ["https://my-frontend.com", "https://my-other-frontend.com", "http://localhost:3000"],
      credentials: true,
    },
  });

  const Message = require("../models/Message.model");

  io.on("connection", (socket) => {
    console.log("a user is connected");

    socket.on("disconnected", () => {
      console.log("a user is disconnected");
    });

    socket.on("message", async (msg) => {
      console.log("message reçu : ");
      console.log(msg);

      try {
        const newMessage = await Message.create({
          serverId: msg.serverId,
          userId: msg.userId,
          content: msg.content,
        });

        socket.emit("message-stored", newMessage);
      } catch (err) {
        socket.emit("error-backend", { err, message: err.message });
        console.error(err);
      }
    });
  });

  // httpServer.listen(process.env.PORT);
};
