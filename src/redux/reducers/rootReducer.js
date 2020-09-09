import {combineReducers} from 'redux';
import { issuesReducer } from './issuesReducer';
import { stopwatchReducer } from './stopwatchReducer';
import { issuesBlocksReducer } from './issuesBlocksReducer';

export function saveToLocalStorage (state) {
    try {
        const issuesState = JSON.stringify(state)
        localStorage.setItem('state', issuesState)
    }catch(e) {
        console.log(e)
    }
}
export function loadFromLocalStorage () {
    try {
        const issuesState = localStorage.getItem('state')
        if (issuesState === null) return undefined
        return JSON.parse(issuesState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

export const rootReducer = combineReducers({
    issues: issuesReducer,
    issuesBlocks: issuesBlocksReducer,
    startTime: stopwatchReducer,
    endTime: stopwatchReducer,
    isStopwatchOn: stopwatchReducer
});