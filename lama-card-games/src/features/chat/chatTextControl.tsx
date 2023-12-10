import React, { FormEvent, KeyboardEvent, useRef } from 'react';

export interface ChatTextControlProps {
  onSendMessage: (messageText: string) => void;
}

export const ChatTextControl: React.FC<ChatTextControlProps> = (props) => {
 
  const inputBox = useRef<HTMLTextAreaElement>(null);

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSendMessage();
  }

  const handleKeyUp = (event:KeyboardEvent) => {
    event.preventDefault();
    if (event.key !== "Enter") {
      return;
    }
    onSendMessage();
  }

  const onSendMessage = () => {
    const messageText = inputBox?.current?.value ?? "";
    if(!messageText.trim()) {
      return;
    }
    props.onSendMessage(messageText);
    inputBox?.current?.focus();
  }

  return (
      <form onSubmit={onFormSubmit} className={""}>
        <textarea
          ref={inputBox}
          placeholder="Type a message..."
          onKeyUp={handleKeyUp}
        ></textarea>
        <button type="submit" className={""}>Send</button>
      </form>
  )
}