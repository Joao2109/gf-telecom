"use client";
import { message } from "@/types/message";
import Message from "./message";
const ChatDisplay = ({
  messages,
  clientId,
}: {
  messages: message[];
  clientId: string;
}) => {
  return (
    <div className="w-full h-[calc(100dvh-136px)] flex flex-col p-2 gap-2 overflow-auto">
      {messages.map((message, i) => {
        return <Message key={i} message={message} clientId={clientId} />;
      })}
    </div>
  );
};
export default ChatDisplay;
