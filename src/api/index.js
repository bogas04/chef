import { API_ENDPOINT } from '@/constants';

const request = url => fetch(url).then(response => response.json()).catch(() => console.log('[request] Error while fetching data')); // eslint-disable-line no-console

export const fetchMenu = () => request(`${API_ENDPOINT}/menu`);

export const fetchOrders = () => request(`${API_ENDPOINT}/orders`);

export const fetchUsers = () => request(`${API_ENDPOINT}/users`);
