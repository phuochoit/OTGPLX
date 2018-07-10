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
        this._onEndReached = this._onEndReached.bind(this);
        // this._onRefresh = this._onRefresh.bind(this);
        // this._getMore = this._getMore.bind(this);
    }
    componentWillMount = () => {
        this.props.fetchNoticeBoardContainer(this.props.keys);
    };

    componentDidMount = () => {
        // rootRef.orderByChild("loai_bien").equalTo(this.props.keys).limitToFirst(10).on('value', (childSnapshot) => {
        //     console.log('childSnapshot', childSnapshot);
        // });


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

    _onEndReached = () => {
        if (this.props.items.length ==  this.props.sumRecored){

            return;
        }
        let param = {
            type: this.props.keys, 
            startKey:this.props.items.length,
        };
        this.props.fetchMoreNoticeBoardContainer(param);
    }

    render() {
        console.log(this.props);
        const { refreshing } = this.state;
        const {items, loadMore} =  this.props;

        if (this.props.currentlySending) {
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
                onEndReachedThreshold={0.1}
                onEndReached={this._onEndReached}
                ListFooterComponent={() => {
                    if(loadMore){
                        return<LoadingComponent />;
                    }else{
                        return <View/>;
                    }
                }}
            />
        );
    }
}

export default NoticeBoardTabComponent;