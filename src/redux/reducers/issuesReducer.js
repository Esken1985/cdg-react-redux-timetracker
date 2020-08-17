import {CREATE_ISSUE} from '../actions/actionTypes'

const initialState = {
    issues: [],
    fetchedIssues: []
}

export const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ISSUE:
            return {...state, issues: state.issues.concat([action.payload])}
        default: return state
    }
}
