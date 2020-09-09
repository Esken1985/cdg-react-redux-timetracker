import { SET_WORKLOG_START_TIMEPOINT, SET_WORKLOG_END_TIMEPOINT  } from '../actions/actionTypes'

const initialState = {
    startTime: "",
    endTime: "",
}

export const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKLOG_START_TIMEPOINT:
    return {
      startTime: new Date()
    }
    case SET_WORKLOG_END_TIMEPOINT:
    return {
      endTime: new Date()
    }
    default: return state
  }
}
