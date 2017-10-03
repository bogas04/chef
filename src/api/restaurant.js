import axios from 'axios';
import { RESTAURANT_API_ENDPOINT } from '@/constants';

const RESERVATION_ENDPOINT = `${RESTAURANT_API_ENDPOINT}/reservations`;

export const fetchReservations = () => axios.get(RESERVATION_ENDPOINT).then(res => res.data);

export const addReservation = reservation => axios.post(RESERVATION_ENDPOINT, reservation)
  .then(res => res.data);
