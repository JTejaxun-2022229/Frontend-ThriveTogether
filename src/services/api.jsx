import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5100/thrive/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) =>{
        const userDetails = localStorage.getItem('user')

        if(userDetails){
            const token =  JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) =>{
        return Promise.reject(e)
    }
)

export const login = async (data) => {
    try{
        return await apiClient.post('/auth/login', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const authenticate = async (data) => {
    try {
        const response = await axios.put(
            "https://api.chatengine.io/users/",
            { username: data.email, secret: data.email, first_name: data.email },
            { headers: { "private-key": "4a07a1a5-c960-4b64-969b-fa3c49e40635" } }
        );
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const register = async (data) => {
    try{
        return await apiClient.post('/auth/register', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}