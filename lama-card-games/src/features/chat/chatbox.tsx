'use client'

import React, { useEffect, useRef, useState } from 'react';
import { useChannel } from "ably/react"
import { ChatTextControl } from './chatTextControl';
import ChatBubble from './chatBubble';
import { ChatMessage } from './types';

interface ChatBoxProps {
  channelName: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({channelName}) => {
  const messageEnd = useRef<HTMLDivElement>(null);
  const [receivedMessages, setMessages] = useState<ChatMessage[]>([]);

  const { channel, ably } = useChannel(channelName, (message) => {
    message.name
    console.log(message);
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const sendChatMessage = (messageText: string) => {
    channel.publish({ name: "chat-message", data: messageText });
  }

  useEffect(() => {
    const options: ScrollIntoViewOptions = { behavior: "smooth" };
    messageEnd?.current?.scrollIntoView(options);
  });

  return (
    <div>
      <div>
        {receivedMessages.map((message, index) => {
          return <ChatBubble key={index} message={message.data} username={message.name} isOwnMessage={message.connectionId === ably.connection.id} />
      })} 
        <div ref={messageEnd}></div>
      </div>
      <ChatTextControl onSendMessage={sendChatMessage} />
    </div>
  )
}

export default ChatBox; 