import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserAvatarProps {
  name: string;
  imageSrc?: string;
  color?: string;
}

const getFallbackLetters = (name: string) => {
  const words = name.split(' ');
  var firstChars = words.map(function (word) {
    return word.charAt(0);
  });
  var result = firstChars.join('');
  return result.substring(0, 2);
};

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
  return (
    <Avatar>
      <AvatarImage src={props.imageSrc} alt={props.name} />
      <AvatarFallback className={`${props.color}`}>{getFallbackLetters(props.name)}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
