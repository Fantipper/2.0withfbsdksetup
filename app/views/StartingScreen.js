/* StartingScreen.js */
import React, { Component } from 'react';

export default class StartingScreen extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	firstLaunch: null
	  };
	}

	componentDidMount() {
		AsyncStorage.getItem("alreadyLaunched").then(value => {
			if (value === null) {
				AsyncStorage.setItem('alreadyLaunched', 'true').then(
					() => {
						this.props.navigation.replace('Tutorial');
					})
			} else {
				this.props.navigation.replace('SignIn');
			}
		})
	}

	render() {
		if (this.state.firstLaunch === null) {
			return(
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size="large" color="rgba(238, 73, 167, 1)" />
				</View>
			)
		}
	}
}

