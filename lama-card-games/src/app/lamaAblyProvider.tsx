"use client";
import { Realtime } from 'ably';
import { AblyProvider } from 'ably/react';

const LamaAblyProvider : React.FC<React.PropsWithChildren> = ({children}) => {
  
    const info = { authUrl: '/api' };
    const rtPromise = new Realtime.Promise(info);
    return <AblyProvider client={rtPromise}>
        {children}
    </AblyProvider>;
}

export default LamaAblyProvider;