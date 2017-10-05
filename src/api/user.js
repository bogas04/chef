import request from '@/utils/request';
import { toMap } from '@/utils/common';

export const fetchUsers = () => request.get('users').then(res => toMap(res.data, 'id'));

// TODO
export const addUser = user => user;
