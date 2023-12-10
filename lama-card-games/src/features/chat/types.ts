import {Types} from "ably"

export interface PubMessage extends Types.Message {
  
}

export interface SubMessage {
  connectionId: string;
  messageId: string;
}

export type ChatMessage = SubMessage &{
  name: string;
  message: string;
  type: "chat-message";
}
