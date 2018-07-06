import { connect } from 'react-redux';
//component
import SideBar from "../../components/config/SideBar";
import { fetchLogoutAction } from "../../actions/ActionSignin";

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

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);
export default SideBarContainer;
