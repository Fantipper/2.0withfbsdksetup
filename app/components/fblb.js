import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import{
	LoginManager,
	AccessToken,
	GraphRequest,
	GraphRequestManager
} from 'react-native-fbsdk';

class fblb extends Component {
	async facebookLogin() {
		// Native_only config will fail in the case that the user has
		// not installed in their device that Facebook app.
		// In this case we need to go for webview
		let result;
		try {
			this.setState({ showLoadingModal: true });
			LoginManager.setLoginBehavior('NATIVE_ONLY');
			result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
  			} catch (nativeError) {
  				try {
  					LoginManager.setLoginBehavior('WEB_ONLY');
  					result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
  				} catch (webError) {
  					// show error message to the user if none of the fb screens open
  				}
			}
		// Handle the case that users clicks cancel button in Login View
		if (result.isCancelled) {
			this.setState({
				showLoadingModal: false,
				notificationMessage: I18n.t('welcome.FACEBOOK_CANCEL_LOGIN')
			});
		} else {
			// Create a graph request asking for user information
			this.FBGraphRequest('id, emaill, picture.type(large)', this.FBLoginCallback);
		}
	}
}
  render() {
    return (
      <View />
    );
  }
}

const styles = StyleSheet.create({

});


export default fblb;