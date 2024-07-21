import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getChats as getChatsRequest, createChat as createChatRequest } from "../../services/api"; 

export const useChats = () => {
  const [chats, setChats] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getChats = async () => {
    try {
      const chatData = await getChatsRequest();
      if (chatData.error) {
        return toast.error(chatData.message || 'No se pudieron obtener los chats');
      }
      setChats(chatData.chats);
    } catch (error) {
      toast.error('Error al obtener los chats');
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  return {
    chats,
    getChats,
    isFetching,
  };
};
