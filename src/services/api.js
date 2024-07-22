import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({

    baseURL: 'http://127.0.0.1:5100/thrive/v1',
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