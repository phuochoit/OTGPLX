import React from "react";
import { createDrawerNavigator } from 'react-navigation';

import { deviceWidth } from "../assets/styles/styles";
import { HOME, NOTICEBOARD } from '../values/ScreenName';

//Container
import HomeContainer from "../containers/home/HomeContainer";
import SideBarContainer from "../containers/config/SideBarContainer";
import NoticeBoardContainer from "../containers/noticeboard/NoticeBoardContainer";


export default AppDrawerNavigator = createDrawerNavigator(
    {
        HOME: { screen: HomeContainer },
        NOTICEBOARD: { screen: NoticeBoardContainer },
    }, {
        drawerWidth: deviceWidth / 1.3,
        headerMode: "none",
        contentComponent: props => <SideBarContainer {...props} />
    });
