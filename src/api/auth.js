import request from '@/utils/request';

export const login = ({ username, password }) =>
  request.post('auth/login', { username, password }).then(res => res.data);

export const getUserFromSession = () => request.get('apprentices').then(res => res.data);

// TODO: Implement sign up
export const signup = credentials => credentials;

export const logout = () => request.get('auth/logout').then(res => res.data);
