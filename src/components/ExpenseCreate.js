import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { expenseUpdate } from '../actions';

class ExpenseCreate extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Rent"
            value={this.props.name}
            onChangeText={value => this.props.expenseUpdate({ prop: 'name', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Amount"
            placeholder="1000"
            value={this.props.amount}
            onChangeText={value => this.props.expenseUpdate({ prop: 'amount', value})}
          />
        </CardSection>

        <CardSection>
          <Text>Date input here...</Text>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

        <CardSection>
          <Button>
            Delete
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, amount, deadline } = state.expenseForm;
  return { name, amount, deadline };
};

export default connect(mapStateToProps, { expenseUpdate })(ExpenseCreate);