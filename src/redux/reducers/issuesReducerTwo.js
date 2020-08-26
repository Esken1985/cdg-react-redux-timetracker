import {CREATE_ISSUE, DELETE_ISSUE, CLONE_ISSUE, CREATE_ISSUES_BLOCK} from '../actions/actionTypes'
import _ from "lodash"

const initialState = {
    issues: [],
    issuesBlocks: [{date: ""}]
}

export const issuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ISSUE:
            return {...state, issues: state.issues.concat([action.payload])}
        case CREATE_ISSUES_BLOCK:
            return {...state, issuesBlocks: action.payload !== prevAction.payload ? state.issuesBlocks.concat([action.payload]) : null}
        case DELETE_ISSUE:
            let newIssues = state.issues.filter(issue => {
                return action.id !== issue.id
            })
            return {
                ...state, issues: newIssues
            } 
        case CLONE_ISSUE:
            let objToClone = _.find(state.issues, function(issue) { return issue.id === action.id; })
            let clonedObj = { ...objToClone }
            return {...state, issues: state.issues.concat(clonedObj)}
            
        default: return state
    }
}