/* logout.js */
'use strict';
const FBSDK = require('react-native-fbsdk');
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
const {LoginManager} = FBSDK;


class Logout extends Component {
	
  render() {
    return (
      <View style={styles.container}>
      	<TouchableOpacity onPress={LoginManager.logOut()} style={styles.logoutbtn}>
      	<Text>press here to logout
      	</Text>
       </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'purple'
	},
	logoutbtn: {
		width: 300,
		borderWidth: 2,
		borderColor: 'blue'
	}

});


export default Logout;