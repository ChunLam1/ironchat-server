module.exports = function (app) {
  const httpServer = require("http").createServer(app);
  const io = require("socket.io")(httpServer, {
    cors: { origin: process.env.FRONTEND_URL },
  });
  const Message = require("../models/Message.model")

  console.log(io);

  io.on("connection", (socket) => {
    console.log("a user is connected");

    socket.on("disconnected", () => {
      console.log("a user is disconnected");
    });

    socket.on("message", (msg) => {
      console.log("message reçu : " + msg.message);

      Message.create()
    });

    // socket.on("message", (arg) => {
    //   console.log(arg);
    // });
    socket.emit("toto", () => console.log("hello"));
  });

  httpServer.listen(process.env.SOCKET_PORT);
};
