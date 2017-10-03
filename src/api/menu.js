import axios from 'axios';
import { RESTAURANT_API_ENDPOINT } from '@/constants';
import { toMap } from '@/utils/common';

const MENU_ENDPOINT = `${RESTAURANT_API_ENDPOINT}/menu`;

export const fetchMenu = () => axios.get(MENU_ENDPOINT).then(res => ({
  items: toMap(res.data, 'id'),
}));

export const addItem = item => axios.post(MENU_ENDPOINT, item).then(res => res.data);
