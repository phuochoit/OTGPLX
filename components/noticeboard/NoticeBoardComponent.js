import React, { Component } from 'react';
import { Container, Tab, Tabs, ScrollableTab} from "native-base";

import HeaderComponent from "../config/HeaderComponent";
import NoticeBoardTabComponent from "./NoticeBoardTabComponent";

class NoticeBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <HeaderComponent navigation={this.props.navigation} title="Biển Báo" />
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Biển Cấm">
                        <NoticeBoardTabComponent keys="1" navigation={this.props.navigation} fetchNoticeBoardContainer={this.props.fetchNoticeBoardContainer} fetchMoreNoticeBoardContainer={this.props.fetchMoreNoticeBoardContainer} items={this.props.noticeBoard.items.cam} currentlySending={this.props.noticeBoard.currentlySending} loadMore={this.props.noticeBoard.loadMore} sumRecored={this.props.noticeBoard.sumrecord}/>
					</Tab>
                    <Tab heading="Biển Nguy Hiểm">
                        <NoticeBoardTabComponent keys="2" navigation={this.props.navigation} fetchNoticeBoardContainer={this.props.fetchNoticeBoardContainer} fetchMoreNoticeBoardContainer={this.props.fetchMoreNoticeBoardContainer} items={this.props.noticeBoard.items.nguyhiem} currentlySending={this.props.noticeBoard.currentlySending} loadMore={this.props.noticeBoard.loadMore} sumRecored={this.props.noticeBoard.sumrecord}/>
                    </Tab>
                    <Tab heading="Biển Hiệu Lệnh">
                        <NoticeBoardTabComponent keys="3" navigation={this.props.navigation} fetchNoticeBoardContainer={this.props.fetchNoticeBoardContainer} fetchMoreNoticeBoardContainer={this.props.fetchMoreNoticeBoardContainer} items={this.props.noticeBoard.items.hieulenh} currentlySending={this.props.noticeBoard.currentlySending} loadMore={this.props.noticeBoard.loadMore} sumRecored={this.props.noticeBoard.sumrecord} />
                    </Tab>
                    <Tab heading="Biển Chỉ Dẫn">
                        <NoticeBoardTabComponent keys="4" navigation={this.props.navigation} fetchNoticeBoardContainer={this.props.fetchNoticeBoardContainer} fetchMoreNoticeBoardContainer={this.props.fetchMoreNoticeBoardContainer} items={this.props.noticeBoard.items.chidan} currentlySending={this.props.noticeBoard.currentlySending} loadMore={this.props.noticeBoard.loadMore} sumRecored={this.props.noticeBoard.sumrecord} />
                    </Tab>
                    <Tab heading="Biển Phụ">
                        <NoticeBoardTabComponent keys="5" navigation={this.props.navigation} fetchNoticeBoardContainer={this.props.fetchNoticeBoardContainer} fetchMoreNoticeBoardContainer={this.props.fetchMoreNoticeBoardContainer} items={this.props.noticeBoard.items.phu} currentlySending={this.props.noticeBoard.currentlySending} loadMore={this.props.noticeBoard.loadMore} sumRecored={this.props.noticeBoard.sumrecord} />
                    </Tab>
                    <Tab heading="Vạch kẻ đường">
                        <NoticeBoardTabComponent keys="6" navigation={this.props.navigation} fetchNoticeBoardContainer={this.props.fetchNoticeBoardContainer} fetchMoreNoticeBoardContainer={this.props.fetchMoreNoticeBoardContainer} items={this.props.noticeBoard.items.vach} currentlySending={this.props.noticeBoard.currentlySending} loadMore={this.props.noticeBoard.loadMore} sumRecored={this.props.noticeBoard.sumrecord} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default NoticeBoardComponent;