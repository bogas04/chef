import request from '@/utils/request';
import { USER_API_ENDPOINT } from '@/constants';
import { toMap } from '@/utils/common';

export const fetchUsers = () => request.get(USER_API_ENDPOINT).then(res => toMap(res.data, 'id'));

// TODO
export const addUser = user => user;
