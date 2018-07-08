import { connect } from 'react-redux';

//action
import { fetchMoreNoticeBoardAction,fetchNoticeBoardAction } from "../../actions/ActionNoticeBoard";
//component
import NoticeBoardComponent from "../../components/noticeboard/NoticeBoardComponent";

const mapStateToProps = (state) => {
    console.log('====================================');
    console.log('state', state);
    console.log('====================================');
    return {
        noticeBoard: state.noticeBoard
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNoticeBoardContainer: (params) => {
            dispatch(fetchNoticeBoardAction(params));
        },
        fetchMoreNoticeBoardContainer: (page) => {
            dispatch(fetchMoreNoticeBoardAction(page));
        },
    }
};
const NoticeBoardContainer = connect(mapStateToProps, mapDispatchToProps)(NoticeBoardComponent);
export default NoticeBoardContainer;