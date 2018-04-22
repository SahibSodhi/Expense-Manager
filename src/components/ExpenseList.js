import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { expensesFetch } from '../actions';
import ListItem from './ListItem';

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

  renderRow(expenses) {
    return <ListItem expenses={expenses} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const expenses = _.map(state.expenses, (val, uid) => {
    return { ...val, uid };
  });
  return { expenses };
};

export default connect(mapStateToProps, { expensesFetch })(ExpenseList);