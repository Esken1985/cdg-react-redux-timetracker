import { CREATE_ISSUES_BLOCK } from "../actions/actionTypes";
import _ from "lodash";

const initialState = {
  issuesBlocks: [],
};

export const issuesBlocksReducer = (state = initialState, action) => {
  let prevBlock = _.findLast(state.issuesBlocks);
  switch (action.type) {
    case CREATE_ISSUES_BLOCK:
      if (!_.isEqual(prevBlock, action.payload))
        return {
          ...state,
          issuesBlocks: state.issuesBlocks.concat([action.payload]),
        };
        else return {
          ...state
        }
    default:
      return state;
  }
};
