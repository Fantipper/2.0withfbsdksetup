/* SplashScreen.js */
import React, { Component } from 'react';
import { ImageBackground, } from 'react-native';

const resetAction = StactActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({ routeName: 'StartingScreen' })
	]
})

export default class SplashScreen extends Component {
	componentDidMount() {
		setTimeout(
			() => 
			{ this.props.navigation.dispatch(resetAction) },
				2 * 1000
		);
	};
}

render() {
	return(
		<View style={styles.container}>
			<Image source={require('../assets/images/00-AppSplash.jpg')} />
		</View>
	);
}