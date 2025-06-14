import { Message } from "@/types/message";
import MessageComponent from "./message";
import { useEffect, useRef } from "react";
const ChatDisplay = ({
  messages,
  clientId,
}: {
  messages: Message[];
  clientId: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);
  return (
    <div
      ref={scrollRef}
      className="w-full h-[calc(100dvh-136px)] flex flex-col p-2 gap-2 overflow-auto"
    >
      {messages.map((message, i) => {
        return (
          <MessageComponent key={i} message={message} clientId={clientId} />
        );
      })}
    </div>
  );
};
export default ChatDisplay;
