/* import { useState } from 'react';
import axios from 'axios';

export const usePost = () => {
  const [loading, setLoading] = useState(false);

  const createPost = async (formData) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5100/thrive/v1/post',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
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
}; */