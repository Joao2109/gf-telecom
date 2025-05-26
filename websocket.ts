import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 4000 });
wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    ws.send(`Server received: ${message}`);
  });
});
