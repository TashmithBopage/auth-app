import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/api/auth' });

export const login = (data) => API.post('/login', data);
export const signup = (data) => API.post('/signup', data);