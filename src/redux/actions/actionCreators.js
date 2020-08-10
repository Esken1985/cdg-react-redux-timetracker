import { CREATE_ISSUE } from "./actionTypes";

export function createIssue (issue) {
    return {
        type: CREATE_ISSUE,
        payload: issue
    }
}