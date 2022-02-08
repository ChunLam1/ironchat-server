module.exports = function (app) {
  const httpServer = require("http").createServer(app);
  const io = require("socket.io")(httpServer, {
    cors: { origin: process.env.FRONTEND_URL },
  });
  const Message = require("../models/Message.model");

  console.log(io);

  io.on("connection", (socket) => {
    console.log("a user is connected");

    socket.on("disconnected", () => {
      console.log("a user is disconnected");
    });

    socket.on("message", (msg) => {
      console.log(
        "message reçu : " +
          {
            serverId: msg.serverId,
            userId: msg.userId,
            content: msg.content,
          }
      );

      Message.create({
        serverId: msg.serverId,
        userId: msg.userId,
        content: msg.content,
      })
        .then((v) => console.log({ v }))
        .catch((e) => console.error(e));
    });

    socket.emit("new-message", (msg) => {
      console.log(msg, "----------------");
      console.log(
        "message reçu : " +
          {
            serverId: msg.serverId,
            userId: msg.userId,
            content: msg.content,
          }
      );
      Message.find({
        serverId: msg.serverId,
      })
        .then((v) => console.log({ v }))
        .catch((e) => console.error(e));
    });
  });

  httpServer.listen(process.env.SOCKET_PORT);
};
