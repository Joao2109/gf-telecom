import Image from "next/image";
import { message } from "@/types/message";
const Message = ({
  message,
  clientId,
}: {
  message: message;
  clientId: string;
}) => {
  const messageRender = () => {
    switch (message.type) {
      case "text":
        return <p>{message.data}</p>;
      case "image":
        return (
          <div>
            <Image src={message.data} alt="Imagem" width={200} height={200} />
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
        <span className="text-xs text-[#cccccc]">{message.timestamp}</span>
      </div>
    </div>
  );
};
export default Message;
