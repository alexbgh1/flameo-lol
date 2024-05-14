import { cn } from "../lib/utils";
import { ChatMessage as msg } from "../types/chatMessage";

interface ChatMessageProps {
  msg: msg;
}
const ChatMessage = ({ msg }: ChatMessageProps) => {
  const { timestamp, scope, team, player, champion, message } = msg;
  const textColor = team === "aliado" ? `text-team-aliado` : `text-team-enemigo`;
  return (
    <div className={cn("z-[2] [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]", textColor)}>
      <span className="text-zinc-300/90">{timestamp} </span>
      <span className="capitalize">[{scope}] </span>
      <span className="player">{player} </span>
      <span>({champion}): </span>
      <span className="text-zinc-100">{message}</span>
    </div>
  );
};

export default ChatMessage;
