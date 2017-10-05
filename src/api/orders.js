import request from '@/utils/request';

export async function fetchOrders() {
  const response = await request.get('restaurant/orders');
  return response.data;
}

export const addOrder = order => request.post('restaurant/orders', order).then(res => res.data);
