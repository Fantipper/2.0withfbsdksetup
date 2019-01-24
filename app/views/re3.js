/* re3.js */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Fonts } from '../src/utils/Fonts';

class re3 extends Component {
	state = {
		isFocused: false
	}
	handleFocuslastname = event => {
		this.setState({ isFocused: true });
		// remember to propagate the 'onFocus' event to the parent as well
		if (this.props.onFocus) {
			this.props.onFocus(event)
			console.log('focus last name');
		}
	}
	handleBlurlastname = event => {
		this.setState({ isFocused: false });
		// remember to propagate the 'onFocus' event to the parent as well
		if (this.props.onBlur) {
			this.props.onBlur(event)
			console.log('blur last name');

		}
	}
	handleFocusfirstname = event => {
		this.setState({ isFocused: true });
		// remember to propagate the 'onFocus' event to the parent as well
		if (this.props.onFocus) {
			this.props.onFocus(event)
			console.log('focus firstname name');
		}
	}

	handleFocusfirstname = event => {
		this.setState({ isFocused: false });
		// remember to propagate the 'onFocus' event to the parent as well
		if (this.props.onBlur) {
			this.props.onBlur(event)
			console.log('blur firstname name');
		}
	}


	render() {
		const { isFocused } = this.state;
		const { onFocus, onBlur, ...otherProps } = this.props;

		// let defaultEmail 

		return(
			<ScrollView style={styles.scroll}>
				<View style={styles.container2}>
	   				<TextInput 
	   					placeholder="firstname" 
	   					onFocus={this.handleFocusfirstname}
	   					onBlur={this.handleBlurfirstname}
	   					// style={[styles.inputBox, styles.boxActive ]} 
	   					// value={this.state.value}
	   					// onChangeText = {(value) => this.onChangeText(value)}
	   					// onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
	   					style={[styles.inputBox, isFocused ? styles.boxActive : styles.boxInactive ]} 
	   					// style={styles.inputBox, borderColor: this.state.borderColor } 

	   					underlineColorAndroid='rgba(0,0,0,0)'
	   					// underlineColorAndroid={ isFocused? 'blue' : 'red'}
	   					placeholderTextColor="grey" 
	   					returnKeyType="next"
	   					onSubmitEditing={() => this.lastname.focus()}
	   					{...otherProps}

   					/>
   					<TextInput 
	   					ref={(input) => this.lastname = input}
	   					onFocus={this.handleFocuslastname}
		   				onBlur={this.handleBlurlastname}

	   					// onFocus={this.onFocusChange.bind(this)}
	   					// onBlur={this.onBlurChange}
	   					// onFocus={alert("on focus")}
	   					style={[styles.inputBox, isFocused ? styles.boxActive : styles.boxInactive ]} 
	   					// style={styles.inputBox, borderColor: this.state.borderColor } 
	   					// style={{borderColor: this.state.borderColor }} 
	   					underlineColorAndroid='rgba(0,0,0,0)'
	   					placeholder="lastname" 
	   					placeholderTextColor="grey" 
	   					returnKeyType="next"
	   					onSubmitEditing={() => this.email.focus()}
	   					{...otherProps}


   					/>
				<TextInput 
   					ref={(input) => this.email = input}
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Email" 
   					placeholderTextColor="grey" 
   					keyboardType="email-address"
   					autoCapitalize="none"
   					autoCorrect={false}
   					onSubmitEditing={() => this.password.focus()}
					// onChangeText={(email) => this.setState({email})}
   					/>
   					
   				<TextInput 
   					ref={(input) => this.password = input}
   					style={styles.inputBox} 
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Password" 
   					secureTextEntry={true}
   					placeholderTextColor="grey"
   					onSubmitEditing={() => this.confirmPassword.focus()}
   					/>
				<TextInput 
   					ref={(input) => this.confirmPassword = input}
   					style={styles.inputBox} 
   					underlineColorAndroid='rgba(0,0,0,0)'
   					placeholder="Confirm Password" 
   					secureTextEntry={true}
   					placeholderTextColor="grey" 
   					// onSubmitEditing={() => this.location.focus()}
   					/>
				</View>
			</ScrollView>
   				
		)
	}
}

console.log("please work i said please work!!!! ");

export default re3;

const styles = StyleSheet.create ({
/*	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
		alignItems: 'center',
		justifyContent: 'center'
	},*/
	scroll: {
		backgroundColor: '#f0f0f0',
	},
	container2: {
		margin: 8,
		marginTop: 24,
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
	inputBox: {
		width: 300,
		backgroundColor: 'white',
		borderRadius: 20,
		// borderColor: '#dfdfdf',
		paddingHorizontal: 16,
		fontSize: 16,
		marginVertical: 6,
	},
	boxActive: {
		borderWidth: 2,

		borderColor: '#00d278',

	},
	boxInactive: {
		borderWidth: 2,

		borderColor: 'black',

	},
	btn_choosePhoto: {
		width: 300,
		// height: 50,
		// paddingHorizontal: 16,
		marginVertical: 6,
		borderRadius: 15,
		paddingVertical: 14,
		backgroundColor: '#939393',
	},
	btn_register: {
		width: 300,
		// height: 50,
		// paddingHorizontal: 16,
		marginVertical: 6,
		borderRadius: 15,
		paddingVertical: 14,
		backgroundColor: '#00d278',
	},
	buttonText: {
		fontFamily: Fonts.Larsseit,
	    fontSize: 17,
	    fontWeight: '200',
		color: '#ffffff',
	    textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
});