import { combineReducers } from 'redux';
import ExpenseFormReducer from './ExpenseFormReducer';
import AuthReducer from './AuthReducer';
import ExpenseReducer from './ExpenseReducer';

export default combineReducers({
  expenseForm: ExpenseFormReducer,
  auth: AuthReducer,
  expenses: ExpenseReducer
});