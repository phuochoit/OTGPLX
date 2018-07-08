import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native'
import { styles, backgroundColorDefault } from "../../assets/styles/styles";

class LoadingComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[styles.flex1, styles.jcac]}>
                <ActivityIndicator size="large" color={backgroundColorDefault} />
            </View>
        );
    }
}

export default LoadingComponent;