import React, { useState } from 'react';
import { useChats } from '../../shared/hooks';
import { useMessages } from '../../shared/hooks';
import { Message } from '../message/Message.jsx';

export const Chat = ({ currentUser, selectedUser }) => {
  const { chats, isFetching: isFetchingChats } = useChats();
  const { messages, sendMessage, isFetching: isFetchingMessages } = useMessages(selectedUser?.chatId);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    sendMessage({
      receptor: selectedUser._id,
      emisor: currentUser._id,
      content: newMessage,
      chatId: selectedUser.chatId
    });
    setNewMessage('');
  };

  if (isFetchingChats || isFetchingMessages) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <Message key={message.messageId} message={message} />
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};
