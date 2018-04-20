import {
  EXPENSE_UPDATE
} from './types';

export const expenseUpdate = ({ prop, value }) => {
  return {
    type: EXPENSE_UPDATE,
    payload: { prop, value }
  };
};