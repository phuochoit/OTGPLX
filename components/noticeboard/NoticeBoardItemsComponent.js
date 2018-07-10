import React from "react";
import { View } from "react-native";
import { H3, Thumbnail } from "native-base";
import firebase from "react-native-firebase";

import LoadingComponent from "../config/LoadingComponent";
import { styles, thumbnail_xp  } from "../../assets/styles/styles";
const rootRef = firebase.storage().ref('images/NoticeBoard');

import { CachedImage } from 'react-native-cached-image';

class NoticeBoardItemsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            url: null,
            loading: true
        })
    }

    render() {
        const { item, index } = this.props;
        console.log('item', item);
        return (
            <View style={[styles.item_xp_wraper, styles.item_xp_wraper_boxshadow, styles.marginHorizontal]} key={index}>
                <View style={[styles.item_xp_left, styles.item_bb_left]}>
                    <Thumbnail source={{ uri: item.anh }}  style={{ width: 70, height:70 }}/>
                </View>
                <View style={[styles.flex80, styles.justifyContent_center]}>
                    <H3 style={[styles.item_xp_title]}>{item.ten_loi}</H3>
                </View>
            </View>
        );
    }
}
export default NoticeBoardItemsComponent;