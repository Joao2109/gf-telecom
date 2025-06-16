import Image from "next/image";
import { Message } from "@/types/message";
const MessageComponent = ({
  message,
  clientId,
}: {
  message: Message;
  clientId: string;
}) => {
  const messageRender = () => {
    switch (message.type) {
      case "TEXT":
        return <p>{message.msg}</p>;
      case "IMAGE":
        return (
          <div>
            <Image src={message.msg} alt="Imagem" width={200} height={200} />
          </div>
        );
      default:
        return (
          <p>
            <i>Mensagem Inválida</i>
          </p>
        );
    }
  };
  return (
    <div className={`flex flex-col`}>
      <div
        className={`p-4 text-white rounded-2xl ${
          clientId.toString() === message.senderId.toString()
            ? "self-end bg-primary"
            : "self-start bg-black"
        }`}
      >
        {messageRender()}
        <span className="text-xs text-[#cccccc]">
          {new Intl.DateTimeFormat("pt-BR", {
            timeZone: "Brazil/East",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          }).format(new Date(message.timestamp))}
        </span>
      </div>
    </div>
  );
};
export default MessageComponent;
