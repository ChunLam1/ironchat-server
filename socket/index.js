module.exports = function (app) {
  console.log("je suis app dans socket/index.js", app);

  const httpServer = require("http").createServer(app);
  const io = require("socket.io")(httpServer);

  console.log(io);

  io.on("connection", (socket) => {
    socket.on("message", (arg) => {
      console.log(arg);
    });
    socket.emit("toto", { data: ":)" });
  });

  httpServer.listen(process.env.SOCKET_PORT);
};
