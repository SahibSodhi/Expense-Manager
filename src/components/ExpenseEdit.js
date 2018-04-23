import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import ExpenseForm from './ExpenseForm';
import { expenseUpdate, expenseSave, expenseDelete } from '../actions';

class ExpenseEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.expense, (value, prop) => {
      this.props.expenseUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, amount, deadline } = this.props;
    this.props.expenseSave({ name, amount, deadline, uid: this.props.expense.uid });
  }

  onAccept() {
    const { uid } = this.props.expense;

    this.props.expenseDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <ExpenseForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, amount, deadline } = state.expenseForm;
  return { name, amount, deadline };
};

export default connect(mapStateToProps, {
  expenseUpdate, expenseSave, expenseDelete
})(ExpenseEdit);