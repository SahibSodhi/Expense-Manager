import { combineReducers } from 'redux';
import ExpenseFormReducer from './ExpenseFormReducer';

export default combineReducers({
  expenseForm: ExpenseFormReducer
});