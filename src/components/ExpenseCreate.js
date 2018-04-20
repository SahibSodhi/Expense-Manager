import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { Text } from 'react-native';

export default class ExpenseCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Rent"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Amount"
            placeholder="1000"
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