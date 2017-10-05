import axios from 'axios';
import { LOGIN_ENDPOINT } from '@/constants';

export const login = ({ username, password }) => axios.post(LOGIN_ENDPOINT, { username, password })
  .then((res) => {
    if (res.status !== 200) return Promise.reject();
    return res.data;
  });

// TODO: Implement sign up
export const signup = credentials => credentials;
