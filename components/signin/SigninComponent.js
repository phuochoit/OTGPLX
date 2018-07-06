import React, { Component } from 'react';
import { Container, Thumbnail, Button, Icon } from "native-base";
import { Text, StatusBar } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import firebase from 'react-native-firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import { styles, backgroundColorDefault } from "../../assets/styles/styles";
import { GOOGLEID } from "../../values/Strings";

class SigninComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
        this.loginWithGoogle = this.loginWithGoogle.bind(this);
    }
    componentWillMount() {
        GoogleSignin.configure({
            iosClientId: GOOGLEID, // only for iOS
            offlineAccess: true
        });
    }

    loginWithFacebook = () => {
        LoginManager
            .logInWithReadPermissions(['public_profile', 'email'])
            .then((result) => {
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }
                console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
                // get the access token
                return AccessToken.getCurrentAccessToken();
            })
            .then(data => {
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                user = firebase.auth().signInWithCredential(credential);
                
                return user;
            })
            .then((currentUser) => {
                this.props.fetchSigninContainer(currentUser);
            })
            .catch((error) => {
                console.log(`Facebook login fail with error: ${error}`);
            });
    }
    loginWithGoogle = () => {
        GoogleSignin
            .signIn()
            .then((data) => {
                // create a new firebase credential with the token
                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                // login with credential
                user = firebase.auth().signInWithCredential(credential);
                return user;
            })
            .then((currentUser) => {
                this.props.fetchSigninContainer(currentUser);
            })
            .catch((error) => {
                console.log(`Login fail with error: ${error}`);
            });
    }

    render() {
        return (
            <Container style={[styles.containerbg, styles.pda]}>
                <StatusBar barStyle="default" backgroundColor={backgroundColorDefault} />
                <Grid>
                    <Row style={[styles.jcac, styles.fx3]}>
                        <Thumbnail square source={require('../../assets/images/icon.png')} />
                    </Row>
                    <Row style={styles.fx1}>
                        <Grid>
                            <Row>
                                <Button
                                    full
                                    iconLeft
                                    rounded
                                    style={[styles.fx1, styles.pda, { backgroundColor: '#4267B2' }]}
                                    onPress={this.loginWithFacebook}
                                >
                                    <Icon name='facebook' type='FontAwesome' style={[styles.fx1, styles.fontSizedefault, { paddingLeft: 5 }]} />
                                    <Text style={[styles.fx5, styles.textcolorfff]}>Đăng Nhập Bằng Facebook</Text>
                                </Button>
                            </Row>
                            <Row>
                                <Button
                                    full
                                    iconLeft
                                    rounded
                                    style={[styles.fx1, styles.pda, { flex: 1, backgroundColor: '#D50F26' }]}
                                    onPress={this.loginWithGoogle}
                                >
                                    <Icon name='google' type='FontAwesome' style={[styles.fx1, styles.fontSizedefault, { paddingLeft: 5 }]} />
                                    <Text style={[styles.fx5, styles.textcolorfff]}>Đăng Nhập Bằng Google</Text>
                                </Button>
                            </Row>
                        </Grid>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

export default SigninComponent;