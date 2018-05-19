import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ExpenseList from './components/ExpenseList';
import ExpenseCreate from './components/ExpenseCreate';
import LoginForm from './components/LoginForm';
import ExpenseEdit from './components/ExpenseEdit';

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
            rightTitle="ADD"
            onRight={() => Actions.expenseCreate() }
          />

        <Scene
          key="expenseCreate"
          title="Create"
          component={ExpenseCreate}
        />

        <Scene
          key="expenseEdit"
          title="Edit"
          component={ExpenseEdit}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;