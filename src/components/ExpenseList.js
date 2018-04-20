import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class ExpenseList extends Component {
  render() {
    return (
      <View>
        <Text>
          ExpenseList
        </Text>
      </View>
    );
  }
}

export default connect(null, {})(ExpenseList);