import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EXPENSE_UPDATE,
  EXPENSE_CREATE
} from './types';

export const expenseUpdate = ({ prop, value }) => {
  return {
    type: EXPENSE_UPDATE,
    payload: { prop, value }
  };
};

export const expenseCreate = ({ name, amount, deadline }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/expenses`)
      .push({ name, amount, deadline })
      .then(() => {
        dispatch({ type: EXPENSE_CREATE });
        Actions.pop()
      });
  };
};