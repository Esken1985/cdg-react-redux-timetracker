import {CREATE_ISSUE, DELETE_ISSUE} from '../actions/actionTypes'

const initialState = {
    issues: [],
    fetchedIssues: []
}

export const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ISSUE:
            return {...state, issues: state.issues.concat([action.payload])}
        case DELETE_ISSUE:
            let newIssues = state.issues.filter(issue => {
                return action.id !== issue.id
            })
            return {
                ...state, issues: newIssues
            }
            
        default: return state
    }
}
