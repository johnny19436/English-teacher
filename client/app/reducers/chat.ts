export type Chat = {
  chatId: string,
  userId: string,
  messages: Message[]
};

export type MessageStatus = 'loading' | 'error' | 'ok';

export type Message = {
  id?: string,
  date: Date,
  sender: 'user' | 'bot',
  text: string,
  status?: MessageStatus
};

type ReceiveMessageAction = {
  type: 'receive_bot_message' | 'load_previous_messages',
  messages: Required<Message>[],
};

type UpdateMessageStatusAction = {
  type: 'update_message_status',
  messageId: string,
  status: MessageStatus
}

type SendMessageAction = {
  type: 'user_send_message',
  messages: Message[]
};

export type ChatReducerAction = ReceiveMessageAction | SendMessageAction | UpdateMessageStatusAction;

export function chatReducer(chat: Chat, action: ChatReducerAction): Chat {
  switch(action.type) {
  case 'user_send_message':

    return {
      ...chat,
      messages: [...chat.messages, ...action.messages]
    };

  case 'update_message_status':

    return {
      ...chat,
      messages: chat.messages.map(message => {
        if(message.id === action.messageId)
          return  { ...message, status: action.status };

        return message;
      })
    };

  case 'receive_bot_message':
    return chat;

  case 'load_previous_messages':
    return chat;

  default:
    return chat;
  }
}
