import request from '@/utils/request';

const ORDER_ENDPOINT = 'restaurant/orders';

export async function fetchOrders() {
  const response = await request.get(ORDER_ENDPOINT);
  return response.data;
}

export const addOrder = order => request.post(ORDER_ENDPOINT, order).then(res => res.data);

export const updateOrder = order => request.put(`${ORDER_ENDPOINT}/${order.id}`, order);
