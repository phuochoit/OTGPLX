import React, { Component } from 'react';
import { Container } from "native-base";
import { Text, View, TouchableOpacity } from 'react-native';
import HeaderComponent from "../config/HeaderComponent";

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Container>
                <HeaderComponent navigation={this.props.navigation} title="Ôn thi giấy phép lái xe" />
            </Container>
        );
    }
}

export default HomeComponent;