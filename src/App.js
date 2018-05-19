import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCZ9U8BebwWwzaNmTIHsVcohxxrGjBYsCE',
      authDomain: 'expensetracker-c502e.firebaseapp.com',
      databaseURL: 'https://expensetracker-c502e.firebaseio.com',
      projectId: 'expensetracker-c502e',
      storageBucket: 'expensetracker-c502e.appspot.com',
      messagingSenderId: '957438745417'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

console.disableYellowBox = true;