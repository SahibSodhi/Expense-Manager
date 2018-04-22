import {
  EXPENSE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  amount: '',
  deadline: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPENSE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }

    default:
      return state;
  }
};