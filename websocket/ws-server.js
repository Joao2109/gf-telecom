import { WebSocket, WebSocketServer } from "ws";
import { parse } from "url";
import { prisma } from "./prisma.js";
const wss = new WebSocketServer({ port: 3000 });
const rooms = new Map();
wss.on("connection", (ws, request) => {
  const { pathname } = parse(request.url || "");
  const roomId = pathname?.slice(1);
  if (!roomId) return;
  if (!rooms.has(roomId)) rooms.set(roomId, new Set());
  rooms.get(roomId)?.add(ws);
  console.log(`Client joined room: ${roomId}`);
  ws.on("message", (msg) => {
    try {
      const parsed = JSON.parse(msg.toString());
      const message = { ...parsed, salaId: Number(roomId) };
      prisma.mensagem
        .create({ data: message })
        .then(() => {
          console.log("Mensagem criada");
        })
        .catch((err) => console.log(err));
      rooms.get(roomId)?.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(
            JSON.stringify({ ...message, timestamp: new Date().toISOString() })
          );
        }
      });
    } catch (err) {
      console.error("Invalid JSON received:", err);
      ws.send(JSON.stringify({ error: "Invalid JSON" }));
    }
  });
  ws.on("close", () => {
    rooms.get(roomId)?.delete(ws);
    if (rooms.get(roomId)?.size === 0) {
      rooms.delete(roomId);
    }
  });
});
