import axios from 'axios';
import { API_ENDPOINT } from '@/constants';

export async function fetchOrders() {
  const response = await axios.get(`${API_ENDPOINT}/orders`);
  return response.data;
}

// TODO
export const addOrder = order => order;
