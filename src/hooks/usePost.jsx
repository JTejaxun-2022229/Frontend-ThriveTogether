import { useState } from 'react';
import axios from 'axios';

export const usePost = () => {
  const [loading, setLoading] = useState(false);

  const createPost = async (title, description) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5100/thriveTogether/v1/post',
        { title, description },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      return { success: true, data: response.data };
    } catch (error) {
      setLoading(false);
      return { success: false, error: error.response.data };
    }
  };

  return { createPost, loading };
};