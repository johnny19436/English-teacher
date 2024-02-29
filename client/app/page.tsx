'use client';

import { useCallback, useState } from "react";
import MessageArea from "./message-area";

export default function Home() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  
  const sendMessage = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    setMessages([...messages, value]);
    setValue("");

    try {
      const request = await fetch('http://localhost:4000/chat', {
        method: 'POST',
        body: formData
      });
    } catch(err) {
      console.error(err);
    }
  };
  
  return (
    <main>
      <div className="container">
        <div className="chat-box">Hello! How can I help you?</div>
        
        <MessageArea messages={messages}/>

        <form method="post" onSubmit={sendMessage}>
            <input 
              type="text" 
              name="message"
              placeholder="Type your message..."
              value={value}
              onChange={e => setValue(e.target.value)}/>

            <input type="submit"/>
        </form>
      </div>
    </main>
  );
}
