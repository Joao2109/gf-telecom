"use client";
import { Button } from "../ui/button";
import { Send, Upload } from "lucide-react";
interface ChatInputProps extends React.ComponentProps<"form"> {
  sendMessage: (message: string, type: string) => void;
}
const ChatInput = ({ sendMessage, ...props }: ChatInputProps) => {
  return (
    <form
      className="w-full flex border border-primary bg-white"
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(e.currentTarget.text.value, "text");
        e.currentTarget.text.value = "";
      }}
      {...props}
    >
      <div className="flex-1 h-8 relative">
        <input
          type="text"
          name="text"
          id="text"
          className="w-[calc(100%-32px)] h-full absolute top-0 right-0 outline-none px-4"
        />
        <Button
          type="button"
          size={"icon"}
          variant={"ghost"}
          className="w-8 h-8 absolute top-0 left-0 rounded-none"
        >
          <Upload className="stroke-black" size={20} />
        </Button>
      </div>
      <Button type="submit" size={"icon"} className="w-8 h-8 rounded-none">
        <Send className="stroke-white" size={20} />
      </Button>
    </form>
  );
};

export default ChatInput;
