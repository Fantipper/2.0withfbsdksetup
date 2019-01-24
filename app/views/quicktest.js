/* quicktest.js */

import React, { Component }  from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
//import {  } from 'react-native-elements'
import { Fonts } from '../src/utils/Fonts';
/*import  Hr  from 'react-native-hr'
*/
import TextInputComp from '../components/TextInputComp';

export default class quicktest extends Component{
	render() {
		return (
			<View style={styles.container}>
   				<Text style={styles.screenTitle}>Register</Text>
   				<View style={styles.signinTextCont}>
	   				<Text style={styles.signinText}>Already have an account? </Text>
	   				<TouchableOpacity>
	   					<Text style={styles.signinBtn}>Sign in</Text>
	   				</TouchableOpacity>
   				</View>
   				<View style={styles.siteTextCont}>
	   				<Text style={styles.instructions}>To become a Creator, please visit our </Text>
	   				<View style={styles.siteBtnCont}>
		   				<TouchableOpacity>
			   					<Text style={styles.siteBtn}>full desktop site</Text>
			   				</TouchableOpacity>
		   				<Text style={styles.instructions}>.</Text>
	   				</View>
   				</View>
   				<View style={styles.horizontalRule} />
   				
				<TextInputComp id='Full Name' />
				<TextInputComp id='Email' />
				<TextInputComp id='Password' />
				<TextInputComp id='Confirm Password' />
				<TextInputComp id='Location' />
				<TouchableOpacity style={styles.btn_choosePhoto}>
					<Text style={styles.buttonText}>CHOOSE PROFILE PHOTO</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn_register}>
					<Text style={styles.buttonText}>REGISTER!</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		// backgroundColor: 'azure',
		backgroundColor: '#f5f5f5',
		// backgroundColor: 'rgba(240,255,255, 0.7)',
		
		alignItems: 'center',
		justifyContent: 'center'
	},
	horizontalRule: {
		/*borderBottomColor: 'black',
    	borderBottomWidth: 4,*/
    	backgroundColor: '#d6d6d6',
  		height: 1.6,
 		width: 300,
 		marginVertical: 10,
	},
	screenTitle: {
	    fontSize: 22,
	    fontFamily: Fonts.RobotoBold,
	    color: '#00d278',
	    textAlign: 'center',
	    margin: 24,
	},	/* already have an account */
	signinTextCont: {
		// flexGrow: 1,
		alignItems: 'flex-end',
		paddingVertical: 16,
		flexDirection: 'row',
	},
	signinText: {
	    fontSize: 18,
	    fontFamily: Fonts.Larsseit,
		color: 'black',
	},
	signinBtn: {
	    fontSize: 18,
		color: '#00d278',
		textDecorationLine: 'underline',
	}, /* full desktop site for creator */
	siteTextCont: {
		alignItems: 'flex-end',
		paddingVertical: 16,
		// flexDirection: 'row',
		alignItems: 'center',

	},
	siteBtnCont: {
		flexDirection: 'row',

	},
	instructions: {
		fontSize: 15,
		color: '#939393',
	    // textAlign: 'center',
	},
	siteBtn: {
		fontSize: 15,
		color: '#939393',
	    // textAlign: 'center',
		// alignItems: 'center',
		textDecorationLine: 'underline',
	},
	btn_choosePhoto: {
		width: 300,
		// height: 50,
		// paddingHorizontal: 16,
		marginVertical: 6,
		borderRadius: 8,
		paddingVertical: 14,
		// backgroundColor: '#414042',
		backgroundColor: '#8c8c8c',
	},
	btn_register: {
		width: 300,
		// height: 50,
		// paddingHorizontal: 16,
		marginVertical: 6,
		borderRadius: 8,
		paddingVertical: 14,
		backgroundColor: '#00d278',
	},
	buttonText: {
		fontFamily: Fonts.LarsseitBold,
		letterSpacing: 2,
	    fontSize: 17,
	    fontWeight: '200',
		color: '#ffffff',
	    textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
});