import React from "react";
import { createDrawerNavigator } from 'react-navigation';

import { deviceWidth } from "../assets/styles/styles";
import { HOME } from '../values/ScreenName';
import HomeContainer from "../containers/home/HomeContainer";
import SideBarContainer from "../containers/config/SideBarContainer";


export default AppDrawerNavigator = createDrawerNavigator(
    {
        HOME: { screen: HomeContainer },
    }, {
        drawerWidth: deviceWidth / 1.3,
        headerMode: "none",
        contentComponent: props => <SideBarContainer {...props} />
    });