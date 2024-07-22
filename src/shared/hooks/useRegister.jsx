import { useState } from 'react';
import { registerUser } from '../../services/api';

export const useRegister = () => {

    const [error, setError] = useState(null);

    const register = async (data) => {

        try {

            const response = await registerUser(data);
            if (response.error) {
                setError(response.e.message);
                return false;
            } else {
                console.log('Registrado exitosamente', response);
                return true;
            }
        } catch (e) {
            
            setError(e.message);
            return false;
        }
    };

    return { register, error };
};
