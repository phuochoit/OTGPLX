import { createStackNavigator } from 'react-navigation';
import { USERSIGNIN} from '../values/ScreenName';

import SigninContainer from "../containers/signin/SigninContainer";

export default UserStackNavigator = createStackNavigator(
    {
        USERSIGNIN: SigninContainer,
    }, {
        headerMode: "none"
    }
);