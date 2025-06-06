"use client";
import { useEffect, useState, useRef } from "react";
import ChatInput from "./chat-input";
import ChatDisplay from "./chat-display";
import { message } from "@/types/message";
import { prisma } from "@root/prisma";
const ChatSuporte = ({
  clientId,
  roomId,
}: {
  clientId: string;
  roomId: string;
}) => {
  const [messages, setMessages] = useState<message[]>([]);
  const ws = useRef<WebSocket | null>(null);
  useEffect(() => {
    ws.current = new WebSocket(
      "https://websocket-bitter-rain-9314.fly.dev/" + roomId
    );
    ws.current.addEventListener("message", async (event) => {
      parseInt(roomId);
      setMessages((prevMessages) => [...prevMessages, JSON.parse(event.data)]);
    });
    return () => {
      ws.current?.close();
    };
  }, [roomId]);
  const sendMessage = async (message: string, type: string) => {
    const msg = { senderId: clientId, type, data: message };
    ws.current?.send(JSON.stringify(msg));
  };
  return (
    <div>
      <ChatDisplay messages={messages} clientId={clientId} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};
export default ChatSuporte;
