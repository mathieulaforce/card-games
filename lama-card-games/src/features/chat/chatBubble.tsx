import LamaAblyProvider from '../../app/lamaAblyProvider';
import ChatBox from './chatbox';

export interface ChatBubbleProps {
  message: string;
  username: string;
  avatar?: string;
  isOwnMessage: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  username,
  isOwnMessage,
}) => {
  if (isOwnMessage) {
    <div className='flex flex-row items-start self-end'>
      <div className='rounded-md bg-blue-600 p-2'>
        <p className='text-sm'>{message}</p>
      </div>
    </div>;
  }
  return (
    <div className='flex flex-row items-start self-start'>
      <div className='rounded-md bg-gray-800 p-2'>
        <p className='text-sm'>{message}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
