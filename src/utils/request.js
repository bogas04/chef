import axios from 'axios';
import { API_ENDPOINT } from '@/constants';

const request = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
});

export default request;
