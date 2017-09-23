import axios from 'axios';
import { API_ENDPOINT } from '@/constants';

export const fetchUsers = () => axios.get(`${API_ENDPOINT}/users`).then(res => res.data);

// TODO
export const addUser = user => user;
