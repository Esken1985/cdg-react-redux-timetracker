import { CREATE_ISSUE, DELETE_ISSUE, SET_WORKLOG_START_TIMEPOINT, SET_WORKLOG_END_TIMEPOINT, CLONE_ISSUE, HIDE_STOPWATCH, START_STOPWATCH, CREATE_ISSUES_HEADER } from "./actionTypes";

export function createIssue (issue) {
    return {
        type: CREATE_ISSUE,
        payload: issue
    }
}
export function createIssuesHeader (date) {
    return {
        type: CREATE_ISSUES_HEADER,
        date: date
    }
}
export function deleteIssue (id) {
    return {
        type: DELETE_ISSUE,
        id: id
    }
}
export function cloneIssue (id) {
    return {
        type: CLONE_ISSUE,
        id: id
    }
}
export function setWorklogStartTimepoint () {
    return {
        type: SET_WORKLOG_START_TIMEPOINT
    }
}
export function setWorklogEndTimepoint () {
    return {
        type: SET_WORKLOG_END_TIMEPOINT
    }
}
export function startStopwatch () {
    return {
        type: START_STOPWATCH
    }
}
export function hideStopwatch () {
    return {
        type: HIDE_STOPWATCH
    }
}