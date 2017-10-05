import request from '@/utils/request';
import { RESTAURANT_API_ENDPOINT, API_ENDPOINT } from '@/constants';

const RESERVATION_ENDPOINT = `${RESTAURANT_API_ENDPOINT}/reservations`;

export const getRestaurant = restaurantId => request.get(`${API_ENDPOINT}/restaurants/${restaurantId}`)
  .then(res => res.data);

export const fetchReservations = () => request.get(RESERVATION_ENDPOINT).then(res => res.data);

export const addReservation = reservation => request.post(RESERVATION_ENDPOINT, reservation)
  .then(res => res.data);
