import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5100/thrive/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')

        if (userDetails) {
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)


/* -----------------USUARIOS--------------------------*/
export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

const checkResponseStatus = (e) => {
    const responseStatus = e?.response?.status

    if (responseStatus) {
        (responseStatus === 401 || responseStatus === 403) && logout
    }
}

export const getChats = async () => {
    try {
        const response = await apiClient.get('/chat');
        return response.data;
    } catch (error) {
        return { error: true, message: error.message };
    }
};

export const createChat = async (data) => {
    try {
        const response = await apiClient.post('/chat', data);
        return response.data;
    } catch (error) {
        return { error: true, message: error.message };
    }
};

export const getMessages = async (chatId) => {
    try {
        const response = await apiClient.get(`/message?chatId=${chatId}`);
        return response.data;
    } catch (error) {
        return { error: true, message: error.message };
    }
};

export const sendMessage = async (data) => {
    try {
        const response = await apiClient.post('/message', data);
        return response.data;
    } catch (error) {
        return { error: true, message: error.message };
    }
};