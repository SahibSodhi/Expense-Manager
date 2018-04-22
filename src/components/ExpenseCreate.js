import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { expenseUpdate, expenseCreate } from '../actions';
import ExpenseForm from './ExpenseForm';

class ExpenseCreate extends Component {

  onButtonPress() {
    const { name, amount, deadline } = this.props;

    this.props.expenseCreate({ name, amount, deadline });
  }

  render() {
    return (
      <Card>
        <ExpenseForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
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

export default connect(mapStateToProps, {
  expenseUpdate, expenseCreate
})(ExpenseCreate);