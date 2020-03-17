import React from 'react'
import { View } from 'react-native'
import { WebView } from "react-native-webview";

function Proflie({ navigation }) {
    const githubUsername = navigation.getParam('github_username')
    return <WebView styles={{ flex: 1 }} source={{ uri: `https://github.com/${githubUsername}` }} />
}

export default Proflie