import { useState } from "react";
import { Message, MessageStatus } from "../reducers/chat";
import { useChat, useChatDispatch } from "../page";

const sendMessage = async(data: { userId: string, message: Message }): Promise<{ messageId: string, status: MessageStatus }> => {
  try {
    const response = await fetch('http://localhost:4000/sendMessage', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    
    const status = response.ok ? 'ok' : 'error';

    const messageId = (await response.json()).messageId;
  
    return { status, messageId };

  } catch(err) {
    // console.error(err);
    
    return { status: 'error', messageId: 'last_sent_message' };
  }
} 

export default function MessageInput() {
  const chat = useChat();
  const chatDispatch = useChatDispatch();
  const [value, setValue] = useState("");
  
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const text = value.trim();

    if(text.length === 0)
      return;

    const formData = new FormData(event.target);

    const message: Message = {
      id: 'last_sent_message',
      date: new Date(),
      sender: 'bot',
      text: text,
      status: 'loading'
    };

    chatDispatch({ type: 'user_send_message', messages: [message] });

    setValue("");

    const { messageId, status } = await sendMessage({ userId: chat.userId, message });
    chatDispatch({ type: 'update_message_status', messageId, status });
  };

  return (
    <div className="message-input">
        
      <form method="post" onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-row h-fit">
          <input 
            className="min-h-12 w-full block ps-4 pe-4 outline-none rounded border border-solid focus:border-blue-500 shadow-sm"
            type="text" 
            autoComplete="off"
            name="message"
            placeholder="Type your message..."
            value={value}
            onChange={e => setValue(e.target.value)}/>

          <input 
            className="h-12 w-24 ms-5 pe-4 ps-4 block rounded bg-blue-500 cursor-pointer text-white shadow-sm" 
            type="submit"/>
        </div>
      </form>

    </div>
  );
}