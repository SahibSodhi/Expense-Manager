import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ExpenseList from './components/ExpenseList';
import ExpenseCreate from './components/ExpenseCreate';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="loginForm"
          component={LoginForm}
          title="Sign-Up/In"
          initial
        />

        <Scene
            key="expenseList"
            component={ExpenseList}
            title="My Expenses"
            rightTitle="Add"
            onRight={() => { Actions.expenseCreate() }}
          />

        <Scene
          key="expenseCreate"
          title="CreateExpense"
          component={ExpenseCreate}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;