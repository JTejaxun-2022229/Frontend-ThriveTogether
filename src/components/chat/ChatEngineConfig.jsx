import React from 'react';
import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine-advanced';

export const ChatEngineConfig = ({ projectID, userName, userSecret }) => {
  return (
    <ChatEngineWrapper>
      <Socket 
        projectID={projectID}
        userName={userName}
        userSecret={userSecret}
      />
      <ChatFeed activeChat />
    </ChatEngineWrapper>
  );
};
