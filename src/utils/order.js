import uniqueId from 'lodash/uniqueId';
import { ORDER_STATUS, ORDER_TYPES } from '@/constants';

const getOrderDefaults = () => ({
  status: ORDER_STATUS.INIT,
  type: ORDER_TYPES.RESTAURANT,
  table: 4,
  number: 1,
  items: [],
  id: uniqueId(),
  created: new Date(),
});

export const buildOrder = order => ({
  ...getOrderDefaults(),
  ...order,
});

const getMenuItemDefaults = () => ({
  id: uniqueId(),
});

export const buildMenuItem = item => ({
  ...getMenuItemDefaults(),
  ...item,
});

export const calculateTotal = (menu, tax, selectedItems) => {
  const subTotal = selectedItems.reduce((sum, item) =>
    sum + (menu[item.id].price * item.quantity), 0);

  // Computed tax (SGST + CGST)
  const total = (subTotal * (100 + (2 * tax))) / 100;

  return total;
};
