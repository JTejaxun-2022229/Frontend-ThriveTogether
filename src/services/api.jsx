import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5100/thrive/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('token');

        if (token) {
            token = token.replace(/^"|"$/g, '');
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (e) => {
        return Promise.reject(e);
    }
);


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

export const getUsers = async () => {

    try {
        const response = await apiClient.get('/user');
        return response.data.users;
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const getUserProfile = async () => {

    try {
        const response = await apiClient.get('/user/profile');
        return response.data.user;
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};


export const getPatients = async () => {

    try {
        return await apiClient.get('/user/patients');
    } catch (e) {
        return {
            error: true,
            e
        }
    }

};

export const updatePatientProgress = async (id, data) => {

    try {
        return await apiClient.patch(`/user/patients/${id}`, data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }

};

export const getSupporters = async () => {

    try {
        return await apiClient.get('/user/profesionalSupport');
    } catch (e) {
        return {
            error: true,
            e
        }
    }

};

export const getAllNotes = async () => {

    try {
        return await apiClient.get('/note/all');
    } catch (e) {
        return {
            error: true,
            e
        }
    }

};

export const getNotesByCreator = async () => {

    try {
        return await apiClient.get('/note/creator');
    } catch (e) {
        return {
            error: true,
            e
        }
    }

};

export const createNote = async (data) => {

    try {
        return await apiClient.post('/note/create', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }

};

export const updateNote = async (id, data) => {

    try {
        return await apiClient.put(`/note/update/${id}`, data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }

};

export const deleteNote = async (id) => {

    try {
        return await apiClient.delete(`/note/delete/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const createPost = async (data) => {
    try {
        console.log(data);
        return await apiClient.post('/post/newPost', data);
    } catch (e) {
        console.error("Error creating post:", e.response ? e.response.data : e.message);
        return {
            error: true,
            e
        };
    }
};

export const getPosts = async () => {
    try {
        return await apiClient.get('/post/getPost');
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const createForum = async (forumData) => {
    try {
        const response = await apiClient.post('/forum', forumData);
        return response.data;
    } catch (e) {
        return { error: true, message: e.message };
    }
};

export const getForums = async () => {
    try {
        const response = await apiClient.get('/forum');
        return response.data;
    } catch (error) {
        return { error: true, message: error.message };
    }
};

export const getForo = async (forumId) => {
    try {
        const response = await apiClient.get(`/forum/${forumId}`);
        console.log('API response data:', response.data);
        return response.data;
    } catch (error) {
        return {
            error: true,
            message: error.response?.data?.msg || error.message
        };
    }
};

export const useAddComment = async (forumTitle, username, text) => {
    try {
        const response = await apiClient.put('/forum/addMessage', {
            title: forumTitle,
            user: username,
            text: text
        });
        return response.data;
    } catch (e) {
        return { error: true, message: e.message };
    }
};