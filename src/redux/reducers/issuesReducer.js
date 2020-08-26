import {CREATE_ISSUE, DELETE_ISSUE, CLONE_ISSUE, CREATE_ISSUES_HEADER} from '../actions/actionTypes'
import _ from "lodash"
import {format} from "date-fns"

const initialDate = format(new Date(), "EEE, MMMM dd")

const initialState = {
    issues: [],
    issuesHeaders: [{date: initialDate, id: "019283074"}],
    issuesTimelines: []
}
export const issuesReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case CREATE_ISSUE:
            return {...state, issues: state.issues.concat([action.payload])}
        case CREATE_ISSUES_HEADER:
            if(!action.date === state.issuesHeaders.date) 
            return {
                ...state, 
                issuesHeaders: state.issuesHeaders.concat([action.date])
            }
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
