import {CREATE_ISSUE} from '../actions/actionTypes'

const initialState = {
    issues: [{
        worklogname: "Team Standup",
        issuename: "JRM-320",
        timefrom: "9:00",
        timeto: "10:00",
        duration: "01:00:00"
    }],
    fetchedIssues: []
}

export const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ISSUE:
            return {...state, issues: state.issues.concat([action.payload])}
        default: return state
    }
}