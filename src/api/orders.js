import request from '@/utils/request';
import { RESTAURANT_API_ENDPOINT } from '@/constants';

const ORDERS_ENDPOINT = `${RESTAURANT_API_ENDPOINT}/orders`;

export async function fetchOrders() {
  const response = await request.get(ORDERS_ENDPOINT);
  return response.data;
}

export const addOrder = order => request.post(ORDERS_ENDPOINT, order).then(res => res.data);
