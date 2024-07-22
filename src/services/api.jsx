import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({
  baseURL: 'http://localhost:5100/thrive/v1',
  timeout: 5000
});

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
    return await apiClient.post('/auth/login', data);
  } catch (e) {
    return {
      error: true,
      e
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (e) {
    return {
      error: true,
      e
    };
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