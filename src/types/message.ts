export interface Message {
  id: number;
  msg: string;
  senderId: string;
  salaId: number;
  type: "TEXT" | "IMAGE";
  timestamp: string;
}
