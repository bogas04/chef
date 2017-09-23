import axios from 'axios';
import { API_ENDPOINT } from '@/constants';

export const fetchMenu = () => axios.get(`${API_ENDPOINT}/menu`).then(res => res.data);

// TDOO
export const addItem = item => item;
