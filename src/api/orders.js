import axios from 'axios';
import { RESTAURANT_API_ENDPOINT } from '@/constants';

export async function fetchOrders() {
  const response = await axios.get(`${RESTAURANT_API_ENDPOINT}/orders`);
  return response.data;
}

// TODO
export const addOrder = order => order;
