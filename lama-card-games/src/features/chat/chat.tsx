'use client';

import LamaAblyProvider from '../../app/lamaAblyProvider';
import ChatBox from './chatbox';

export interface ChatProps {
  channelName: string;
}

const Chat: React.FC<ChatProps> = ({ channelName }) => {

  return (
    <LamaAblyProvider>
      <ChatBox channelName={channelName} />
    </LamaAblyProvider>
  );
};

export default Chat;
