"use client";
import { useEffect, useState, useRef } from "react";
import ChatInput from "./chat-input";
import ChatDisplay from "./chat-display";
import { message } from "@/types/message";
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
    ws.current = new WebSocket("ws://localhost:3001/" + roomId);
    ws.current.addEventListener("message", (event) => {
      setMessages((prevMessages) => [...prevMessages, JSON.parse(event.data)]);
    });
    return () => {
      ws.current?.close();
    };
  }, []);
  const sendMessage = async (message: string) => {
    const msg = { senderId: clientId, type: "text", data: message };
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
