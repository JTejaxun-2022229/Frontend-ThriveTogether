import { useState } from 'react';
import { register as registerUserAPI } from '../../services/api';

export const useRegister = () => {

    const [isLoading, setIsLoading] = useState(false);

    const registerUser = async (userData) => {

        setIsLoading(true);
        try {

            await registerUserAPI(userData);
            setIsLoading(false);
            
        } catch (error) {
            setIsLoading(false);
            console.error('Registration failed:', error);
        }
    };

    return { registerUser, isLoading };
};