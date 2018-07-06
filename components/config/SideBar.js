import React from "react";
import firebase from 'react-native-firebase';
import { View, TouchableOpacity } from "react-native";
import { Container, Content, Text, List, ListItem, Thumbnail, H1, Left, Right, Body, Icon } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { styles, deviceHeight } from "../../assets/styles/styles";
import { HOME } from "../../values/ScreenName";
import { DARWERMENU } from "../../values/Strings";

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    logout = async () => {
        await firebase.auth().signOut().then(function () {
            this.props.fetchLogoutContainer();
        });
    }

    render() {
        const { user } = this.props.user;
        const heightTop = deviceHeight * 0.25;
        const heightcenter = deviceHeight * 0.1;
        const heightFooter = deviceHeight * 0.05;
        const heightBottom = deviceHeight - heightTop - heightcenter - heightFooter;

        if (user != null) {
            return (
                <Container style={{backgroundColor: '#fff'}}>
                    <Content>
                        <Grid>
                            <Row style={{height: heightTop, paddingHorizontal: 20, paddingVertical: 10}}>
                                <View style={[styles.fx1, { flexDirection: 'column' }]}>
                                    <View style={[styles.fx1, styles.jcac]}>
                                        <Thumbnail square source={{ uri: user.photoURL }} />
                                    </View>
                                    <View style={[styles.fx3, { justifyContent: 'center', alignItems: 'flex-start', marginTop: 15 }]}>
                                        <Text><Text style={styles.textFontBold}>Tên: </Text>{user.displayName}</Text>
                                        <Text><Text style={styles.textFontBold}>Email: </Text>{user.email}</Text>
                                    </View>
                                </View>
                            </Row>
                            <Row style={[styles.sidebarCenter,{ height: heightcenter}]}>
                                <View style={[styles.fx1, styles.jcac]}>
                                    <H1>15</H1>
                                    <Text>Thi</Text>
                                </View>
                                <View style={[styles.fx1, styles.jcac]}>
                                    <H1>15</H1>
                                    <Text>Đậu</Text>
                                </View>
                                <View style={[styles.fx1, styles.jcac]}>
                                    <H1>15</H1>
                                    <Text>Trượt</Text>
                                </View>
                            </Row>
                            <Row style={{ height: heightBottom, paddingTop: 30 }}>
                                <List
                                    dataArray={DARWERMENU}
                                    renderRow={data => {
                                        return (
                                            <ListItem
                                                icon
                                                button
                                                onPress={() => this.props.navigation.navigate(data.name)}
                                                style={{ height: 35 }}>
                                                <Left>
                                                    <Icon name={data.icon} type={data.iconType} style={styles.sidebarIconMenu} />
                                                </Left>
                                                <Body style={{ borderBottomWidth: 0, height: 'auto' }}>
                                                    <Text style={styles.sidebarTxtMenu}>{data.title}</Text>
                                                </Body>
                                                <Right />
                                            </ListItem>
                                        );
                                    }}
                                />
                            </Row>
                            <Row style={{ height: heightFooter, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                                <TouchableOpacity
                                    style={[styles.fx1, { marginLeft: 17, flexDirection: 'row' }]}
                                    onPress={this.logout.bind(this)}
                                >
                                    <View style={{ width: 30 }}>
                                        <Icon name='logout-variant' type='MaterialCommunityIcons' style={styles.sidebarIconMenu} />
                                    </View>
                                    <View style={styles.fx1}>
                                        <Text style={styles.sidebarTxtMenu} >Đăng Xuất</Text>
                                    </View>
                                </TouchableOpacity>
                            </Row>
                        </Grid>
                    </Content>
                </Container >
            );
        } else {
            return <View />
        }
    }
}