import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Text, View, ImageBackground } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size="large" />
      );
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
           {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <ImageBackground
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={{ uri: remote }}
      >
        <Card style={styles.cardStyle}>
          <CardSection>
            <Input
              label="Email"
              placeholder="user@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                label="Password"
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>

            {this.renderError()}

            <CardSection>
              {this.renderButton()}
            </CardSection>
        </Card>
      </ImageBackground>
    );
  }
}

const remote = 'https://i.pinimg.com/originals/f3/c5/7b/f3c57bd6e2044e12a4654338c8838d58.jpg';

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  cardStyle: {
    backgroundColor: '#f79a3d',
    height: 400
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email, password, error, loading
  }
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);