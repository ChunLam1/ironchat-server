module.exports = function (app) {
  const httpServer = require("http").createServer(app);
  const io = require("socket.io")(httpServer, {
    cors: { origin: process.env.FRONTEND_URL },
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

  httpServer.listen(process.env.SOCKET_PORT);
};
