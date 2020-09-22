import {
  CREATE_ISSUE,
  DELETE_ISSUE,
  CLONE_ISSUE,
  CREATE_ISSUES_BLOCK,
  EDIT_ISSUE
} from "./actionTypes";

export function createIssuesBlock(date) {
  return {
    type: CREATE_ISSUES_BLOCK,
    payload: date,
  };
}
export function createIssue(issue) {
  return {
    type: CREATE_ISSUE,
    payload: issue,
  };
}
export function editIssue(id, edittedIssue) {
  return {
    type: EDIT_ISSUE,
    id,
    edittedIssue
  };
}
export function deleteIssue(id) {
  return {
    type: DELETE_ISSUE,
    id: id,
  };
}
export function cloneIssue(id) {
  return {
    type: CLONE_ISSUE,
    id: id,
  };
}