import axios from 'axios';
import { RESTAURANT_API_ENDPOINT } from '@/constants';

export const fetchReservations = () => axios.get(`${RESTAURANT_API_ENDPOINT}/reservations`).then(res => res.data);

// TODO
export const addReservation = reservation => reservation;
