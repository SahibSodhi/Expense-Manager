import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { CardSection, Input} from './common';
import { expenseUpdate } from '../actions';

class ExpenseForm extends Component {
  render() {
    return (
      <View>
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

        <CardSection style={{ flexDirection: 'column' }, { flexGrow: 2 }}>
          <Text style={styles.dateLabelStyle}>Date</Text>
          <DatePicker
            style={{ flex: 1 }, { marginLeft: 50 }}
            date={this.props.deadline}
            mode="date"
            placeholder="select a deadline date"
            format="DD-MM-YYYY"
            minDate="04-01-2018"
            maxDate="04-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36,
                flex: 1
              }
            }}
            onDateChange={value => this.props.expenseUpdate({ prop: 'deadline', value})}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  dateLabelStyle: {
    paddingLeft: 20,
    fontSize: 18
  }
};

mapStateToProps = state => {
  const { name, amount, deadline } = state.expenseForm;

  return { name, amount, deadline };
};

export default connect(mapStateToProps, { expenseUpdate })(ExpenseForm);