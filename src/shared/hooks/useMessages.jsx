import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getMessages as getMessagesRequest, sendMessage as sendMessageRequest } from "../../services/api";

export const useMessages = (chatId) => {
  const [messages, setMessages] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getMessages = async () => {
    try {
      const messageData = await getMessagesRequest(chatId);
      if (messageData.error) {
        return toast.error(messageData.message || 'No se pudieron obtener los mensajes');
      }
      setMessages(messageData.messages);
    } catch (error) {
      toast.error('Error al obtener los mensajes');
    } finally {
      setIsFetching(false);
    }
  };

  const sendMessage = async (message) => {
    try {
      const messageData = await sendMessageRequest(message);
      if (messageData.error) {
        return toast.error(messageData.message || 'No se pudo enviar el mensaje');
      }
      setMessages([...messages, messageData.message]);
    } catch (error) {
      toast.error('Error al enviar el mensaje');
    }
  };

  useEffect(() => {
    getMessages();
  }, [chatId]);

  return {
    messages,
    sendMessage,
    isFetching,
  };
};
