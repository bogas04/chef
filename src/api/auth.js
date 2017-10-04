import axios from 'axios';
import { LOGIN_ENDPOINT } from '@/constants';

export const login = ({ username, password }) => axios.post(LOGIN_ENDPOINT, { username, password })
  .then(res => res.data);

// TODO: Implement sign up
export const signup = credentials => credentials;
