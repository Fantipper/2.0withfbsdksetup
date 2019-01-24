/* RegiForm.js */

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

class RegiForm extends Component {
	// constructor
	constructor(props) {
      super(props);

      this.onFocus = this.onFocus.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onChangeText = this.onChangeText.bind(this);
      this.onSubmitFirstName = this.onSubmitFirstName.bind(this);
      this.onSubmitLastName = this.onSubmitLastName.bind(this);
      this.onSubmitEmail = this.onSubmitEmail.bind(this);
      this.onSubmitPassword = this.onSubmitPassword.bind(this);

      this.firstnameRef = this.updateRef.bind(this, 'firstname');
      this.lastnameRef = this.updateRef.bind(this, 'lastname');
      this.emailRef = this.updateRef.bind(this, 'email');
      this.passwordRef = this.updateRef.bind(this, 'password');

      this.state = {
        firstname: '',
        lastname: '', 
        // firstname: 'Eddard',
        // lastname: 'Stark',
        secureTextEntry: true,
      };
	}

	onFocus() {
		let { errors = {} } = this.state;
		for (let name in errors) {
			let ref = this[name];
			if (ref && ref.isFocused()) {
				delete errors[name];
			}
		}
		this.setState({ errors });
	}

	onChangeText(text) {
		['firstname', 'lastname', 'email', 'password']
		.map((name) => ({ name, ref: this[name] }))
		.forEach(({ name, ref }) => {
			if (ref.isFocused()) { this.setState({ [name]: text} ); }
		});
	}

	// onAccessoryPress() function

	onSubmitFirstName() {
		this.firstname.focus();
	}
	onSubmitLastName() {
		this.lastname.focus();
	}
	onSubmitEmail() {
		this.email.focus();
	}
	onSubmitPassword() {
		this.password.focus();
	}

	onSubmit() {
		let errors = {};
		['firstname', 'lastname', 'email', 'password']
		.forEach((name) => {
			let value = this[name].value();
			if (!value) {
				errors[name] = 'Should not be empty';
			} else {
				if ('password' === name && value.length < 6) {
					errors[name] = 'Too short';
				}
			}
		});
		this.setState({ errors });
	}

	updateRef(name, ref) {
		this[name] = ref;
	}

	//renderPasswordAccessory() function

	render() {
		let { errors = {}, secureTextEntry, ...data } = this.state;
		let { firstname = 'name', lastname = 'house' } = data;

		// let defaultEmail 

		return(
			<ScrollView style={styles.scroll}>
				<View style={styles.container2}>
	   				<TextField 
	   					ref={this.firstnameRef}
	   					value={data.firstname}
	   					label='firstname'
	   					onChangeText={(firstname) => this.setState({firstname})}
	   					baseColor="green"
	   				/>
	   				<TextField 
	   					ref={this.lastnameRef}
	   					value={data.lastname}
	   					label='lastname'
	   					onChangeText={(lastname) => this.setState({lastname})}

	   				/>
	   				<TextField 
	   					ref={this.emailRef}
	   					value={data.email}
	   					label='email'
	   					onChangeText={(email) => this.setState({email})}
   						keyboardType="email-address"

	   				/>
	   				<TextField 
	   					ref={this.passwordRef}
	   					value={data.password}
	   					label='password'
	   					onChangeText={(password) => this.setState({password})}
	   				/>
				</View>
			</ScrollView>
   				
		)
	}
}

export default RegiForm;

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