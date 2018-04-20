import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ExpenseList from './components/ExpenseList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="list" component={ExpenseList} title="My Expenses" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;