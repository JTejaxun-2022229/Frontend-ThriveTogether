import { useState } from 'react';
import { register as registerUserAPI } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const registerUser = async (userData) => {

        setIsLoading(true);

        try {

            await registerUserAPI(userData);
            setIsLoading(false);
            navigate('/');
        } catch (error) {

            setIsLoading(false);
            console.error('Registration failed:', error);
        }
    };

    return { registerUser, isLoading };
};
