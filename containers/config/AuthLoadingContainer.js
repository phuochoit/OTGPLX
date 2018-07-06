import { connect } from 'react-redux';

//action
import { fetchSigninAction } from "../../actions/ActionSignin";
//component
import AuthLoadingScreen from "../../components/AuthLoadingScreen";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSigninContainer: (playload) => {
            dispatch(fetchSigninAction(playload))
        },
    }
};
const AuthLoadingContainer = connect(null, mapDispatchToProps)(AuthLoadingScreen);
export default AuthLoadingContainer;
