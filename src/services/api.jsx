import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5100/thrive/v1',
    timeout: 5000
})

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

export const useAddComment = async (forumId, username, text) => {
    try {
        const response = await apiClient.put(`/forums/${forumId}/comment`, {
            user: username,
            text: text,
        });
        return response.data;
    } catch (e) {
        return { error: true, message: e.message };
    }
};