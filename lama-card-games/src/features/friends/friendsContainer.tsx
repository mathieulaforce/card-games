import React from 'react';
import FriendStatusEntry, { FriendStatusEntryProps } from './friendStatusEntry';

interface FriendContainerProps {
    entries: Array<FriendStatusEntryProps>;
};

const FriendList:React.FC<FriendContainerProps> = (props) => {
    return <div className='py-4 divide-y divide-white'>
        {props.entries.map((entry) => {
            return <FriendStatusEntry key={entry.id} id={entry.id} name={entry.name} description={entry.description} status={entry.status} />

        })}
    </div>
};

export default FriendList;