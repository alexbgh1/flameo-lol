import { ChatMessage as ChatMessageType } from "../types/chatMessage";
import ChatMessage from "./ChatMessage";

interface ChatProps {
  bg: string;
  flameos: ChatMessageType[] | null;
}

const handleBG = (bg: string) => {
  const splitBG = bg.split(":");
  const isBG = splitBG[0] === "bg" ? true : false;
  return isBG ? splitBG[1] : `${splitBG[1]}`;
};

const Chat = ({ bg, flameos }: ChatProps) => {
  const background = handleBG(bg);
  return (
    <div className={`relative flex flex-col p-4 bg-zinc-950 rounded-lg ${background}`}>
      {flameos?.map((msg, index) => (
        <ChatMessage key={index} msg={msg} />
      ))}
    </div>
  );
};

export default Chat;
