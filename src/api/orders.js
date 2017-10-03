import axios from 'axios';
import { RESTAURANT_API_ENDPOINT } from '@/constants';

const ORDERS_ENDPOINT = `${RESTAURANT_API_ENDPOINT}/orders`;

export async function fetchOrders() {
  const response = await axios.get(ORDERS_ENDPOINT);
  return response.data;
}

export const addOrder = order => axios.post(ORDERS_ENDPOINT, order).then(res => res.data);
