export interface message {
  senderId: string;
  type: "text" | "image";
  data: string;
  timestamp: string;
}
