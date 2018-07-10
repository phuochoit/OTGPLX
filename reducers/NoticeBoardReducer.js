import { concat } from "lodash";
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
    currentlySending: false,
    loadMore: false,
    sumrecord: null
}

const NoticeBoardReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_NOTICEBOARD:
            return { ...state, currentlySending: true, type: "FETCH_NOTICEBOARD" }

        case FETCH_NOTICEBOARD_SUCCEEDED:
            switch (action.result.type) {
                case "1":
                    return {
                        ...state, items: {
                            ...state.items,
                            cam: action.result.playload
                        }, currentlySending: false
                    }
                case "2":
                    return {
                        ...state, items: {
                            ...state.items,
                            nguyhiem: action.result.playload
                        }, currentlySending: false
                    }
                case "3":
                    return {
                        ...state, items: {
                            ...state.items,
                            hieulenh: action.result.playload
                        }, currentlySending: false
                    }
                case "4":
                    return {
                        ...state, items: {
                            ...state.items,
                            chidan: action.result.playload
                        }, currentlySending: false
                    }
                case "5":
                    return {
                        ...state, items: {
                            ...state.items,
                            phu: action.result.playload
                        }, currentlySending: false
                    }
                case "6":
                    return {
                        ...state, items: {
                            ...state.items,
                            vach: action.result.playload
                        }, currentlySending: false
                    }
            }
            return { ...state }
        case FETCH_MORE_NOTICEBOARD:
            return { ...state, loadMore: true }
        case FETCH_MORE_NOTICEBOARD_SUCCEEDED:
            switch (action.result.type) {
                case "1":
                    return {
                        ...state, items: {
                            ...state.items,
                            cam: concat(state.items.cam, action.result.playload)
                        }, loadMore: false, sumrecord: action.result.sumrecord
                    }
                case "2":
                    return {
                        ...state, items: {
                            ...state.items,
                            nguyhiem: concat(state.items.nguyhiem, action.result.playload)
                        }, loadMore: false, sumrecord: action.result.sumrecord
                    }
                case "3":
                    return {
                        ...state, items: {
                            ...state.items,
                            hieulenh: concat(state.items.hieulenh, action.result.playload)
                        }, loadMore: false, sumrecord: action.result.sumrecord
                    }
                case "4":
                    return {
                        ...state, items: {
                            ...state.items,
                            chidan: concat(state.items.chidan, action.result.playload)
                        }, loadMore: false, sumrecord: action.result.sumrecord
                    }
                case "5":
                    return {
                        ...state, items: {
                            ...state.items,
                            phu: concat(state.items.phu, action.result.playload)
                        }, loadMore: false, sumrecord: action.result.sumrecord
                    }
                case "6":
                    return {
                        ...state, items: {
                            ...state.items,
                            vach: concat(state.items.vach, action.result.playload)
                        }, loadMore: false, sumrecord: action.result.sumrecord
                    }
            }
            return { ...state }
        case FETCH_NOTICEBOARD_FAILED:
            return { ...state, error: action.error }
        default:
            return state;
    }


}

export default NoticeBoardReducer;
