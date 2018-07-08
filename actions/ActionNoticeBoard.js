import { FETCH_NOTICEBOARD, FETCH_NOTICEBOARD_SUCCEEDED, FETCH_NOTICEBOARD_FAILED, FETCH_MORE_NOTICEBOARD, FETCH_MORE_NOTICEBOARD_SUCCEEDED } from "./ActionTypes";

export function fetchNoticeBoardAction(params) {
    return { type: FETCH_NOTICEBOARD, params }
}
export function fetchMoreNoticeBoardAction(params) {
    return { type: FETCH_MORE_NOTICEBOARD, params }
}

function fetchNoticeBoardSuccessedAction(result) {
    return {
        type: FETCH_NOTICEBOARD_SUCCEEDED,
        result
    }
}

function fetchMoreNoticeBoardSuccessedAction(result) {
    return {
        type: FETCH_MORE_NOTICEBOARD_SUCCEEDED,
        result
    }
}
function fetchMoreNoticeBoardFailedAction(error) {
    return {
        type: FETCH_NOTICEBOARD_FAILED,
        error
    }
}