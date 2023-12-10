import React, { useCallback } from 'react';

export type OnlineStatus = "Online" | "Offline" | "Away" | "Busy" | "Invisible" | "Unknown";

interface OnlineStatusBallProps {
    status: OnlineStatus;
};

const statusToColor = (status: OnlineStatus) => {
    switch (status) {
        case "Online":
            return "bg-green-500";
        case "Away":
            return "bg-yellow-500";
        case "Busy":
            return "bg-red-500";
        default:
            return "bg-gray-500";
    }
};    

const OnlineStatusBall:React.FC<OnlineStatusBallProps> = ({status}) => {
   const color =  useCallback(() => {
        return statusToColor(status);
    }, [status]);
    
    return <div className={`${color} rounded-full w-2`}></div>
};

export default OnlineStatusBall;