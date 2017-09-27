import axios from 'axios';
import { RESTAURANT_API_ENDPOINT } from '@/constants';
import { toMap } from '@/utils/common';

export const fetchMenu = () => axios.get(`${RESTAURANT_API_ENDPOINT}/items`).then(res => ({
  items: toMap(res.data, 'id'),
}));

// TDOO
export const addItem = item => item;
