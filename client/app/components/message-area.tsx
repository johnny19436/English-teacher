'use client';

import { useChat } from "../page";

const getSenderSpecificClass = (sender: string) => {

  if(sender == 'user') {
    return 'user-message bg-blue-300 float-right';
  }

  return 'bot-message float-left bg-white';
}

export default function MessageArea() {  
  const chat = useChat();

  return (
    <div className="message-area float-right w-full pt-2 pb-2">
      { chat.messages.map((message, index) =>
        <div 
          className={ getSenderSpecificClass(message.sender) + ` text-slate-700 message h-fit w-10/12 rounded shadow m-1 ps-3 pe-3 pt-2 pb-2` } 
          key={index}
        >
          { message.text }
        </div>
      ) }
    </div>
  );
}
