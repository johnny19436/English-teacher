'use client';

import { useCallback, useState, createContext, useContext, useReducer, Dispatch } from "react";

import { chatReducer, Chat, Message, ChatReducerAction } from "./reducers/chat";

import MessageArea from "./components/message-area";
import MessageInput from "./components/message-input";

const ChatContext = createContext<Chat | null>(null);
const ChatDispatchContext = createContext<Dispatch<ChatReducerAction> | null>(null);

export const useChat = () => useContext(ChatContext)!;

export const useChatDispatch = () => useContext(ChatDispatchContext)!;

const messages: Message[] = [{
  id: '1',
  date: new Date(),
  sender: 'user',
  text: 'aboba'
}];

export default function Home() {
  const [chat, dispatch] = useReducer(chatReducer, { userId: "1", chatId: "1", messages });

  return (
    <ChatContext.Provider value={chat}>
      <ChatDispatchContext.Provider value={dispatch}>

        <div className="chat-wrapper w-full h-screen bg-blue-50">
          <div className='chat-container h-full flex flex-col items-center p-8'>

            <div className="grow h-full w-8/12 no-scrollbar overflow-y-scroll overflow-x-hidden">
              <MessageArea/>
            </div>
            
            <div className="h-14 w-8/12 pt-4">
              <MessageInput/>
            </div>
          
          </div>
        </div>

      </ChatDispatchContext.Provider>
    </ChatContext.Provider>
  );
}
