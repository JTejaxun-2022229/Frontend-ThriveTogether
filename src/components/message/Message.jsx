import React from 'react';

export const Message = ({ message }) => {
  return (
    <div className={`message ${message.emisor ? 'sent' : 'received'}`}>
      <p>{message.content}</p>
    </div>
  );
};

