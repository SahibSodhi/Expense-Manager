import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ExpenseList from './components/ExpenseList';
import ExpenseCreate from './components/ExpenseCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
        key="expenseList"
        component={ExpenseList}
        title="My Expenses"
        initial
        rightTitle="Add"
        onRight={() => { Actions.expenseCreate() }} />
        <Scene
          key="expenseCreate"
          title="CreateExpense"
          component={ExpenseCreate} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;