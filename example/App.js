import React, { Component } from 'react';
import { AppRegistry, StyleSheet, WebView } from 'react-native';

import OfflineCacheWebView from 'react-native-offline-cache-webview';


export default class webview extends Component {
    render() {

        return (
            <OfflineCacheWebView
                style={styles.webview}
                ref="webview"
                source={{uri: 'https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018'}}
            />
        );
    }
}

const styles = StyleSheet.create({
    webview: {
        flex: 1
    }
});

AppRegistry.registerComponent('webview', () => webview);
