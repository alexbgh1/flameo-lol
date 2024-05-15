import { ChatMessage as ChatMessageType } from "../types/chatMessage";
import ChatMessage from "./ChatMessage";

interface ChatProps {
  flameos: ChatMessageType[] | null;
}

const Chat = ({ flameos }: ChatProps) => {
  return (
    <>
      {flameos?.map((msg, index) => (
        <ChatMessage key={index} msg={msg} />
      ))}
    </>
  );
};

export default Chat;
