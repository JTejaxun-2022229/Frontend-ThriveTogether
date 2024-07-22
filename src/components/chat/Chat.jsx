import React, { useState } from 'react';
import { ChatEngineWrapper, Socket, ChatList, ChatFeed } from 'react-chat-engine-advanced';

const projectID = 'YOUR_PROJECT_ID';
const userName = 'YOUR_USER_NAME';
const userSecret = 'YOUR_USER_SECRET';

export const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <ChatEngineWrapper>
      <Socket 
        projectID={projectID}
        userName={userName}
        userSecret={userSecret}
      />
      <div style={{ display: 'flex' }}>
        <ChatList onChatClick={(chat) => setActiveChat(chat.id)} />
        <ChatFeed activeChat={activeChat} />
      </div>
    </ChatEngineWrapper>
  );
};
