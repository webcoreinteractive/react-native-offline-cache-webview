# react-native-offline-cache-webview

## Features
Offline cache enabled WebView, works for Android and iOS.

iOS | Android
------- | ----
<img title="Android" src="https://i.imgur.com/81c9Gn5.png" width="350"> | <img title="Android" src="https://i.imgur.com/FNlkjkO.png" width="350">


## Install

```bash
npm i react-native-offline-cache-webview --save
react-native link react-native-offline-cache-webview
```

## Usage
```javascript
import OfflineCacheWebView from 'react-native-offline-cache-webview';
export default class webview extends Component {
    render() {
        return (
            <OfflineCacheWebView
                style={styles.webview}
                source={{uri: 'http://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018'}}
            />
        );
    }
}
```
### Example
* Check it [here](https://github.com/zhangtaii/react-native-offline-cache-webview/tree/master/example)


### TODO

* `offlineCacheMode` property to control `on/off` for cache usage
* `prefetch` method for caching url by advance
* `clearCache` method


### Credits
Thanks following repositories' inspiration/help:

* [react-native-create-library](https://github.com/frostney/react-native-create-library)
* [react-native-advanced-webview](https://github.com/magicismight/react-native-advanced-webview)
* [CacheWebView](https://github.com/yale8848/CacheWebView)
* [RNCachingURLProtocol](https://github.com/rnapier/RNCachingURLProtocol)
