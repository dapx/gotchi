import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { Form, Item, Label, Input, Button } from 'native-base';
import Api from '../utils/api';

const logo = require('../../temporary.png');

interface LoginResponse {
  user: string,
  jwt: string,
  name: string,
}

// TODO - Search how to type navigation object properties.
interface Navigation {
  navigate: any,
}

interface Props {
  navigation: Navigation,
}

interface State {
  username: string,
  password: string,
  loading: boolean,
}

class Login extends React.PureComponent<Props, State> {
  state = {
    username: '',
    password: '',
    loading: false
  }

  handleUsername = (username: string) => this.setState({ username })
  handlePassword = (password: string) => this.setState({ password })

  onLogin = () => {
    this.setState({ loading: true });
    /**
     * Just a test, it is not the real request.
     * To work right:
     * Api.insecure_request('auth/signin', { ...userData }, 'POST').then(... => goToHome);
     */
    Api.insecure_request('').then((data: LoginResponse) => {
      this.setState({ loading: false });
      this.props.navigation.navigate('Home');
    }).catch(error => {
      // Call Toast to show message to the user.
      // Shows the error message
      this.setState({ loading: false });
      console.error(error);
    });
  }

  render() {
    const {
      username,
      password,
      loading
    } = this.state;
    return (
      <View style={styles.container}>
        <Form style={styles.loginContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.title}>Login</Text>
          <Item inlineLabel>
            <Label>Username</Label>
            <Input
              onChangeText={this.handleUsername}
              placeholder={'your@email.com'}
              style={styles.input}
              value={username}
            />
          </Item>
          <Item inlineLabel>
            <Label>Password</Label>
            <Input
              onChangeText={this.handlePassword}
              placeholder={'your-email-password'}
              secureTextEntry={true}
              style={styles.input}
              value={password}
            />
          </Item>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.onLogin}
              block
              light
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                Conectar
              </Text>
            </Button>
          </View>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 25,
    color: '#fff',
  },
  input: {
    flex: 1,
    color: '#fff',
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    padding: 10,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
});

export default Login;