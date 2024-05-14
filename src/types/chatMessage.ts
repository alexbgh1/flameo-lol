type Timestamp = `${number}${number}:${number}:${number}`;
type Scope = "todos" | "equipo";
type Team = "aliado" | "enemigo";

interface ChatMessage {
  timestamp: Timestamp;
  scope: Scope;
  team: Team;
  player: string;
  champion: string;
  message: string;
}

export type { ChatMessage, Timestamp, Scope, Team };
