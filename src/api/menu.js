import request from '@/utils/request';
import { toMap } from '@/utils/common';

export const fetchMenu = () => request.get('restaurant/menu').then(res => ({
  items: toMap(res.data, 'id'),
}));

export const addItem = item => request.post('restaurant/menu', item).then(res => res.data);
