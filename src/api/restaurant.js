import request from '@/utils/request';

export const getRestaurant = () => request.get('restaurant')
  .then(res => res.data);

export const fetchReservations = () => request.get('restaurant/reservations').then(res => res.data);

export const addReservation = reservation => request.post('restaurant/reservations', reservation)
  .then(res => res.data);
