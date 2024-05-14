import { ChatMessage as msg } from "./types/chatMessage";

interface ChatMessageProps {
  msg: msg;
}
const ChatMessage = ({ msg }: ChatMessageProps) => {
  const { timestamp, scope, team, player, champion, message } = msg;
  return (
    <div className={`text-team-${team}`}>
      <span className="text-zinc-100/80">{timestamp} </span>
      <span className="capitalize">[{scope}] </span>
      <span className="player">{player} </span>
      <span>({champion}): </span>
      <span className="text-zinc-100">{message}</span>
    </div>
  );
};

export default ChatMessage;
