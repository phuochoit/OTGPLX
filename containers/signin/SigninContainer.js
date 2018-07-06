import { connect } from 'react-redux';

//action
import { fetchSigninAction } from "../../actions/ActionSignin";
//component
import SigninComponent from "../../components/signin/SigninComponent";

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSigninContainer: (action) => {
            dispatch(fetchSigninAction(action))
        },
    }
};
const SigninContainer = connect(null, mapDispatchToProps)(SigninComponent);
export default SigninContainer;