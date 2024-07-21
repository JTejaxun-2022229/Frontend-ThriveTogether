import { useEffect, useState } from 'react';


export const useUser = () => {
    
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const userDetails = localStorage.getItem('user');
      if (userDetails) {
        const token = JSON.parse(userDetails).token;
        const jwtDecode = (await import('jwt-decode')).default;
        const decoded = jwtDecode(token);
        setUser(decoded);
      }
    };

    loadUser();
  }, []);

  return { user };
};