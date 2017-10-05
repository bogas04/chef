import axios from 'axios';
import { API_ENDPOINT } from '@/constants';

const request = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000,
  withCredentials: true,
});

export default request;
