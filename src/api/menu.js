import request from '@/utils/request';
import { RESTAURANT_API_ENDPOINT } from '@/constants';
import { toMap } from '@/utils/common';

const MENU_ENDPOINT = `${RESTAURANT_API_ENDPOINT}/menu`;

export const fetchMenu = () => request.get(MENU_ENDPOINT).then(res => ({
  items: toMap(res.data, 'id'),
}));

export const addItem = item => request.post(MENU_ENDPOINT, item).then(res => res.data);
