import { connect } from 'react-redux';

//action
import { fetchLogoutAction } from "../../actions/ActionSignin";
//component
import HomeComponent from "../../components/home/HomeComponent";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogoutContainer: () => {
            dispatch(fetchLogoutAction())
        },
    }
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;