import keyBy from 'lodash/keyBy';
import request from '@/utils/request';

export const fetchUsers = () => request.get('users').then(res => keyBy(res.data, 'id'));

// TODO
export const addUser = user => user;
