import request from '@/utils/request';
import keyBy from 'lodash/keyBy';

const MENU_ENDPOINT = 'restaurant/menu';

export const fetchMenu = () => request.get(MENU_ENDPOINT).then(res => keyBy(res.data, 'id'));

export const addItem = item => request.post(MENU_ENDPOINT, item).then(res => res.data);

export const updateItem = item => request.put(`${MENU_ENDPOINT}/${item.id}`, item);
