import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { expensesFetch } from '../actions';
import ListItem from './ListItem';
import { CardSection } from './common';

class ExpenseList extends Component {

  componentWillMount() {
    this.props.expensesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ expenses }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(expenses);
  }

  renderTotal({ expenses }) {
    const sum = expenses.reduce((sum, expense) => sum + parseInt(expense.amount), 0)
    return sum;
  }
  renderRow(expense) {
    return <ScrollView><ListItem expense={expense} /></ScrollView>;
  }

  render() {
    const expenses = this.props.expenses;
    let total = 0;
    if(expenses.length) {
      total = expenses.reduce((sum, expense) => sum + parseInt(expense.amount), 0)
    }

    return (
      <ScrollView>
        <CardSection style={styles.totalContainer}>
          <Text style={styles.totalTextStyle}>Tracked Bills: {total}€</Text>
        </CardSection>

        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </ScrollView>
    );
  }
}

const styles = {
  totalContainer: {
    backgroundColor: '#9dff84',
    height: 100,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5,
    justifyContent: 'center'
  },
  totalTextStyle: {
    color: '#1d3018',
    fontSize: 26,
    fontWeight: '600',
    alignSelf: 'center'
  }
}

const mapStateToProps =  state => {
  const expenses = _.map(state.expenses, (val, uid) => {
    return { ...val, uid };
  });
  return { expenses };
};

export default connect(mapStateToProps, { expensesFetch })(ExpenseList);