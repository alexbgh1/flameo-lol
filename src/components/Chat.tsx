import { ChatMessage as ChatMessageType } from "../types/chatMessage";
import ChatMessage from "./ChatMessage";

interface ChatProps {
  bg: string;
  flameos: ChatMessageType[];
}

const Chat = ({ bg, flameos }: ChatProps) => {
  const splitBG = bg.split(":");
  const isBG = splitBG[0] === "bg" ? true : false;
  const bgg = isBG ? splitBG[1] : `${splitBG[1]}`;
  return (
    <div className={`flex flex-col p-4 bg-zinc-950 rounded-lg ${bgg}`}>
      {flameos.map((msg, index) => (
        <ChatMessage key={index} msg={msg} />
      ))}
    </div>
  );
};

export default Chat;
