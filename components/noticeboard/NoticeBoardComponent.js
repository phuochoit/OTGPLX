import React, { Component } from 'react';
import { Container, Tab, Tabs, ScrollableTab} from "native-base";

import HeaderComponent from "../config/HeaderComponent";
import NoticeBoardTabComponent from "./NoticeBoardTabComponent";

class NoticeBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount = () => {
    
        params = {
            page: 1,
            type:  "1"
        }
        this.props.fetchNoticeBoardContainer(params);
    };
    
    render() {
        return (
            <Container>
                <HeaderComponent navigation={this.props.navigation} title="Biển Báo" />
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Biển Cấm">
                        <NoticeBoardTabComponent keys="1" navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading="Biển Nguy Hiểm">
                        <NoticeBoardTabComponent keys="2" navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading="Biển Hiệu Lệnh">
                        <NoticeBoardTabComponent keys="3" navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading="Biển Chỉ Dẫn">
                        <NoticeBoardTabComponent keys="4" navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading="Biển Phụ">
                        <NoticeBoardTabComponent keys="5" navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading="Vạch kẻ đường">
                        <NoticeBoardTabComponent keys="6" navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default NoticeBoardComponent;