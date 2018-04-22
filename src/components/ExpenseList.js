import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { expensesFetch } from '../actions';

class ExpenseList extends Component {
  componentWillMount() {
    this.props.expensesFetch();
  }
  render() {
    return (
      <View>
        <Text>ExpenseList</Text>
        <Text>ExpenseList</Text>
        <Text>ExpenseList</Text>
        <Text>ExpenseList</Text>
        <Text>ExpenseList</Text>
      </View>
    );
  }
}

export default connect(null, { expensesFetch })(ExpenseList);