/* TextInputComp.js */

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

export default class TextInputComp extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	value: this.props.value,
	  	id: this.props.id,
	  	borderColor: '#d6d6d6',
	  }
	}
	static defaultProps = {
	  value: '',
	  id: ''
	  // isFocused: false,
	}

	onChangeText(value) {
		this.setState({ value: value });
	}
	onSubmitEditing(e) {
		console.log('onSubmitEditing called : ' + e);
	}

	onFocus(e) {
		console.log('on focus called')
		this.setState({
			borderColor: '#00d278',
			
		})
	}
	onBlur(e) {
		console.log('on blur called');
		this.setState({
			borderColor: '#d6d6d6',
			
		})
	}

	render() {
		return (
			<View>
			<TextInput 
				// placeholder=''
				placeholder={this.state.id}	
				placeholderTextColor='#6a6a6a'			
				value={this.state.value}
				maxLength={40}
				selectionColor='#00d278'
				selectTextOnFocus={false}
				editable={true}
				onFocus={(e) => this.onFocus(e)}
				onBlur={(e) => this.onBlur(e)}
				onChangeText={(value) => this.onChangeText(value)}
				onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
				style={{
					width: 300,
					backgroundColor: 'white',

					borderColor: this.state.borderColor,
					borderRadius: 8,
					borderWidth: 2,
					marginVertical: 6,
					paddingHorizontal: 16,
				}}
			/>

			{/*<Text style={styles.testtext}>{this.state.value}</Text>*/}
			</View>
		)
	}

}

const styles = StyleSheet.create ({
	testtext: {
		fontFamily: 'Roboto',
	    fontSize: 20,
	    fontWeight: '300',
		color: 'black',
	},
})
