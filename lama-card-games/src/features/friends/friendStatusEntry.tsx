import UserAvatar from '@/components/avatars/userAvatar';
import OnlineStatusBall, { OnlineStatus } from '@/components/onlineStatusBall';
import React from 'react';

export interface FriendStatusEntryProps {
    id: string;
    name: string;
    description: string;
    status: OnlineStatus;
    imageSrc?: string;
}

const FriendStatusEntry: React.FC<FriendStatusEntryProps> = ({name, description, status, imageSrc}) => {
  return (
    <div className='p-2 flex flex-row'>
      <UserAvatar name={name} color={"bg-blue-500"} imageSrc={imageSrc}/>
      <OnlineStatusBall status={status} />
      <div className='flex flex-col'>
        <span className='font-bold text-lg'>{name}</span>
        <span className='font-thin text-sm'>{description}</span>
      </div>
    </div>
  );
};

export default FriendStatusEntry;
