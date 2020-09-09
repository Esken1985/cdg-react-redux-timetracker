import {
  CREATE_ISSUE,
  DELETE_ISSUE,
  CLONE_ISSUE
} from "../actions/actionTypes";
import _ from "lodash";
import uuid from "react-uuid";

const initialState = {
  issues: [],
};

export const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ISSUE:
      return {
        ...state,
        issues: state.issues.concat([action.payload]),
      };
    case DELETE_ISSUE:
      let newIssues = state.issues.filter((issue) => {
        return action.id !== issue.id;
      });
      return {
        ...state,
        issues: newIssues,
      };
    case CLONE_ISSUE:
      let objToClone = _.find(state.issues, function (issue) {
        return issue.id === action.id;
      });
      let clonedObj = _.cloneDeep(objToClone)
      let reasignedClonedObj = {
        worklogname: clonedObj.worklogname,
        issuename: clonedObj.issuename, 
        id: uuid(),
        date: clonedObj.date,
        startTime:'',
        endTime:'',
        duration:''
      }
      return { ...state, issues: state.issues.concat(reasignedClonedObj) };

    default:
      return state;
  }
};
