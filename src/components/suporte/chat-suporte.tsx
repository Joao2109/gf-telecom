import { useEffect, useState, useRef } from "react";
import ChatInput from "./chat-input";
import ChatDisplay from "./chat-display";
import { Message } from "@/types/message";
const ChatSuporte = ({
  clientId,
  roomId,
}: {
  clientId: string;
  roomId: string;
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const ws = useRef<WebSocket | null>(null);
  useEffect(() => {
    fetch("/api/mensagens", {
      method: "POST",
      body: JSON.stringify({ roomId }),
    }).then(async (res) => {
      const data = await res.json();
      setMessages(data);
    });
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
    if (!ws.current || !roomId || !clientId) return;
    const msg = { senderId: clientId, type, msg: message };
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
