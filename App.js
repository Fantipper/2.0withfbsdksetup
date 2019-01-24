/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { 
createStackNavigator, 
// createSwitchNavigator, 
createDrawerNavigator, 
createAppContainer } from 'react-navigation' //@3.0.9

import LoginScreen from './app/views/LoginScreen'
import Register from './app/views/RegisterScreen'
import Regi2 from './app/views/RegiForm'
import re3 from './app/views/re3'
import quicktest from './app/views/quicktest'

// var FBLoginButton = require('./app/components/FBLoginButton');

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

class Home extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'green'
    }
  };
  render() {
    return( 
      <View style={styles.container}>
        <Text style={styles.welcome}>Home!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}
class Dashboard extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white'
    }
  };
  render() {
    return( 
      <ScrollView>
        <View style={{ height: 1000, borderWidth: 15, borderColor: 'green'}} />
      </ScrollView>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: Home
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange'
    }
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: Home,
  Dashboard: Dashboard,
  LoginScreen: LoginScreen,
  Register: Register,
  Regi2: Regi2,
  re3: re3,
  quicktest: quicktest
},{
  unmountInactiveRoute: true,
  initialRouteName: 'quicktest',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange'
    }
  }
});

const AppContainer = createAppContainer(AppDrawerNavigator);

/*const AuthStackNavigator = createStackNavigator({
  Splash: SplashScreen,
  Login: LoginScreen,
})

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,

})
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
