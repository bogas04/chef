import request from '@/utils/request';
import { toMap } from '@/utils/common';

const MENU_ENDPOINT = 'restaurant/menu';

export const fetchMenu = () => request.get(MENU_ENDPOINT).then(res => ({
  items: toMap(res.data, 'id'),
}));

export const addItem = item => request.post(MENU_ENDPOINT, item).then(res => res.data);

export const updateItem = item => request.put(`${MENU_ENDPOINT}/${item.id}`, item);
