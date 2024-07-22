import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login as loginRequest, authenticate} from "../../services/api"
import toast from "react-hot-toast"

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const login = async(email, password) =>{
        setIsLoading(true)

        const authResponse = await authenticate({ email: email });

        if (authResponse.error) {
            setIsLoading(false);
            return toast.error(
                authResponse.e?.response?.data || 'Ocurrió un error al autenticar'
            );
        }

        const response = await loginRequest({
            email,
            password
        })

        setIsLoading(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrió un erro al iniciar sesión'
            )
        }

        const { token } = response.data

        localStorage.setItem('token', JSON.stringify(token))

        navigate('/dashboard/home')
    }
    return {
        login,
        isLoading
    }
}
