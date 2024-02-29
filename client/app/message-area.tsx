'use client';

import { useCallback, useState } from "react";

export default function MessageArea({ messages }: { messages: string[] }) {  
  return (
    <div id="message-area">
        { messages.map((message, index) =>
            <div className="user-message" key={index}>
                { message }
            </div>
        ) }
    </div>
  );
}
