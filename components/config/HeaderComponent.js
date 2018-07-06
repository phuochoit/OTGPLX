import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import { backgroundColorDefault, styles } from "../../assets/styles/styles";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.ButtonDrawer = this.ButtonDrawer.bind(this);
    }
    ButtonDrawer = () => {
        this.props.navigation.toggleDrawer();
    }
    render() {
        const { title } = this.props;
        return (
            <Header
                noShadow
                androidStatusBarColor={backgroundColorDefault} iosStatusbar="default"
                style={styles.headerWrapper}>
                <Left style={styles.headerwrapperLeft}>
                    <Button transparent onPress={this.ButtonDrawer}>
                        <Icon name='ios-menu-outline' />
                    </Button>
                </Left>
                <Body style={styles.jcac}>
                    <Title style={[styles.textfontFamily, { textAlign: 'center', }]}>{title}</Title>
                </Body>
                <Right style={styles.headerwrapperRight} />
            </Header>
        );
    }
}

export default HeaderComponent;