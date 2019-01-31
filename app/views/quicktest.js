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
import { Fonts } from '../src/utils/Fonts';
var FBLoginButton = require('../components/FBLoginButton');
import TextInputComp from '../components/TextInputComp';
import TermsFooter from '../components/TermsFooter';

export default class quicktest extends Component{
	state = { _fullname: "", _password: "" }
	submitCheck() {
		console.log('now run the register check' )
		const { _fullname, _password } = this.state
	}
	render() {
		return (
			<ScrollView contentContainerStyle={styles.contentContainer}>
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
   				<FBLoginButton />
   				<View style={styles.dividerContainer}>
   					<View style={styles.horizontalRuleOR} />
   					<Text style={styles.dividerText}>OR</Text>
   					<View style={styles.horizontalRuleOR} />
   				</View>
   				
				<TextInputComp id='Full Name' />
				<TextInputComp id='Email' />
				<TextInputComp id='Password' />
				<TextInputComp id='Confirm Password' />
				<TextInputComp id='Location' />
				<TouchableOpacity style={styles.btn_choosePhoto}>
					<Text style={styles.buttonText}>CHOOSE PROFILE PHOTO</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn_register} onPress={() => submitCheck()} >
					<Text style={styles.buttonText}>REGISTER!</Text>
				</TouchableOpacity>
				<TermsFooter />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create ({
	contentContainer: {
		// flex: 1,
		// backgroundColor: 'azure',
		backgroundColor: '#f5f5f5',
		paddingVertical: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	horizontalRule: {	/* Divider */
    	backgroundColor: '#d6d6d6',
  		height: 2,
 		width: 364,
 		marginVertical: 28,
	}, /* Divder row container */
	dividerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	horizontalRuleOR: {	/* Divider */
    	backgroundColor: '#d6d6d6',
  		height: 2,
 		width: 144,
 		marginVertical: 30,
 		marginHorizontal: 24,
 		// paddingVertical: 20,
	},
	dividerText: {
		fontSize: 16,
	    fontFamily: Fonts.LarsseitBold,
		letterSpacing: 2,
	    fontWeight: '500',
	    color: '#d6d6d6',
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
		paddingVertical: 6,
		flexDirection: 'row',
	},
	signinText: {
	    fontSize: 20,
	    fontFamily: Fonts.Larsseit,
		color: 'black',
	},
	signinBtn: {
	    fontSize: 20,
		color: '#00d278',
		textDecorationLine: 'underline',
	}, /* full desktop site for creator */
	siteTextCont: {
		//alignItems: 'flex-end',
		paddingVertical: 16,
		alignItems: 'center',
	},
	siteBtnCont: {
		flexDirection: 'row',
	},
	instructions: {
	    fontFamily: Fonts.Larsseit,
		fontSize: 18,
		color: '#939393',
	},
	siteBtn: {
		fontSize: 18,
		color: '#939393',
		textDecorationLine: 'underline',
	},
	btn_choosePhoto: {
		width: 364,
		height: 64,
		marginVertical: 12,
		borderRadius: 8,
		paddingVertical: 18,
		backgroundColor: '#8c8c8c',
	},
	btn_register: {
		width: 364,
		height: 64,
		marginVertical: 12,
		borderRadius: 8,
		paddingVertical: 18,
		backgroundColor: '#00d278',
	},
	buttonText: {
		fontFamily: Fonts.LarsseitBold,
		letterSpacing: 2,
	    fontSize: 18,
	    fontWeight: '700',
		color: '#ffffff',
	    textAlign: 'center',
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
});