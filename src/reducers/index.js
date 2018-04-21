import { combineReducers } from 'redux';
import ExpenseFormReducer from './ExpenseFormReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  expenseForm: ExpenseFormReducer,
  auth: AuthReducer
});