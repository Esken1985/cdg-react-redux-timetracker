import {
  CREATE_ISSUE,
  DELETE_ISSUE,
  CLONE_ISSUE,
  CREATE_ISSUES_BLOCK,
  EDIT_ISSUE,
  ADD_TO_FAVORITES,
  POST_ISSUE,
} from "./actionTypes";
import axios from "axios";

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
    edittedIssue,
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
export const postIssue = (issue) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3004/issues", issue)
      .then((response) => {
        console.log(response);
        dispatch({
          type: POST_ISSUE,
          payload: response.data,
        });
      })
      .catch((error) => {console.log(error);});
  };
};
