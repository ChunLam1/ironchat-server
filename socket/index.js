module.exports = function (app) {
  const httpServer = require("http").createServer(app);
  const io = require("socket.io")(httpServer, {
    cors: { origin: process.env.FRONTEND_URL },
  });

  console.log(io);

  io.on("connection", (socket) => {
    socket.on("message", (arg) => {
      console.log(arg);
    });
    socket.emit("toto", { data: ":)" });
  });

  httpServer.listen(process.env.SOCKET_PORT);
};
