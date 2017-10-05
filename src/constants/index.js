export const LOGIN_STATUS = {
  LOGGED_OUT: 'LOGGED_OUT',
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const ORDER_STATUS = {
  INIT: 'INIT',
  PARTIALLY_FULFILLED: 'PARTIALLY_FULFILLED',
  FULFILLED: 'FULFILLED',
  PAID: 'PAID',
};

export const ORDER_TYPES = {
  RESTAURANT: 'RESTAURANT',
  TAKE_AWAY: 'TAKE_AWAY',
  DELIVERY: 'DELIVERY',
};

export const MENU_ITEM_TAGS = {
  RECOMMENDED: "Chef's recommendation",
  SPICY: 'Spicy',
  SEASONAL: 'Seasonal',
  EGG: 'Contains egg',
  VEG: 'Vegetarian',
};

const MOCK_API_URL = 'http://localhost:3000';

export const API_ENDPOINT = MOCK_API_URL;
