import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { Form, Item, Label, Input, Button } from 'native-base';
const logo = require('../../temporary.png');

class Login extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Form style={styles.loginContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.title}>Login</Text>
          <Item inlineLabel>
            <Label>Username</Label>
            <Input
              placeholder={'your@email.com'}
              style={styles.input}
            />
          </Item>
          <Item inlineLabel>
            <Label>Password</Label>
            <Input
              placeholder={'your-email-password'}
              secureTextEntry={true}
              style={styles.input}
            />
          </Item>
          <View style={styles.buttonContainer}>
            <Button block light>
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