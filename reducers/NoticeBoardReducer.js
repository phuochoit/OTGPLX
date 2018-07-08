import { FETCH_NOTICEBOARD, FETCH_NOTICEBOARD_SUCCEEDED, FETCH_NOTICEBOARD_FAILED, FETCH_MORE_NOTICEBOARD, FETCH_MORE_NOTICEBOARD_SUCCEEDED } from "../actions/ActionTypes";

const initialState = {
    error: null,
    items: {
        cam: null,
        nguyhiem: null,
        hieulenh: null,
        chidan: null,
        phu: null,
        vach: null,
    },
    currentloading: true,
    type: 'none'
}

const NoticeBoardReducer = (state = initialState, action) => {

    console.log('action', action.type);
    switch (action.type) {
        case FETCH_NOTICEBOARD_SUCCEEDED:
            switch (action.result.type) {
                case "1":
                    return { ...state, currentlySending: false , items:{
                        ...state.items,
                        cam: action.result.playload
                    }, type: 'FETCH_NOTICEBOARD_SUCCEEDED'}
            }
           
        case FETCH_NOTICEBOARD_FAILED:
            return { ...state, error: action.error }
        default:
            return state;
    }

    
}

export default NoticeBoardReducer;
