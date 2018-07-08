import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import firebase from "react-native-firebase";
import { Button } from "native-base";
import { concat } from "lodash";

import NoticeBoardItemsComponent from "./NoticeBoardItemsComponent";
import LoadingComponent from "../config/LoadingComponent";
import { styles } from "../../assets/styles/styles";

const rootRef = firebase.database().ref('NoticeBoard');
class NoticeBoardTabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            items: [],
            refreshing: false,
            loadding: true,
            limit: 10,
            loadMore: false,
        });
        // this._getdata = this._getdata.bind(this);
        // this._onRefresh = this._onRefresh.bind(this);
        // this._getMore = this._getMore.bind(this);
    }
    componentWillMount = async () => {
        // const noticeboards = [];
        // rootRef.orderByChild("loai_bien").equalTo(this.props.keys).limitToFirst(this.state.limit).on('child_added', (childSnapshot) => {
        //     noticeboards.push(childSnapshot.val());
        // });

        // this.setState({
        //     items: noticeboards
        // });
    };
    componentDidMount = () => {
        // setTimeout(() => {
        //     this.setState({ loadding: false })
        // }, 3000);
    }
    _getdata = async () => {
        // let  noticeboards = [];
        // await rootRef.orderByChild("loai_bien").equalTo(this.props.keys).limitToFirst(this.state.limit).on('child_added', (childSnapshot) => {
        //     noticeboards.push(childSnapshot.val());
        //     this.setState({ items: noticeboards });
        // });

    }
    _onRefresh() {

    }

    _getMore() {
        // this.setState({ 
        //     loadMore: !this.state.loadMore,
        //     limit: this.state.limit + 10
        // });
        // this._getdata();
        // setTimeout(() => {
        //     this.setState({
        //         loadMore: !this.state.loadMore,
        //     });
        // }, 3000);
    }

    render() {
        const { refreshing, items, loadding } = this.state;

        if (loadding) {
            return (
                <View style={[styles.fx1, styles.jcac]}>
                    <LoadingComponent />
                </View>
            );
        }
        return (
            <FlatList
                style={[styles.fx1, { marginTop: 10 }]}
                data={items}
                renderItem={({ item, index }) => {
                    return (
                        <NoticeBoardItemsComponent item={item} index={index} navigation={this.props.navigation} />
                    );
                }}
                keyExtractor={item => item.id}
                onRefresh={this._onRefresh}
                refreshing={refreshing}
                ListFooterComponent={() => {
                    return (
                        <Button 
                            transparent  
                            rounded 
                            full
                            onPress={this._getMore}
                        >
                            <Text>Xem Thêm</Text>
                        </Button>
                    );
                }}
            />
        );
    }
}

export default NoticeBoardTabComponent;