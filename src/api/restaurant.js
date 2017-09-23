import axios from 'axios';
import { API_ENDPOINT } from '@/constants';

export const fetchReservations = () => axios.get(`${API_ENDPOINT}/reservations`).then(res => res.data);

// TODO
export const addReservation = reservation => reservation;
