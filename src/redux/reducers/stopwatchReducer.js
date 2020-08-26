import { SET_WORKLOG_START_TIMEPOINT, SET_WORKLOG_END_TIMEPOINT, START_STOPWATCH, HIDE_STOPWATCH } from '../actions/actionTypes'

const initialState = {
    startTime: "",
    endTime: "",
    isRunning: true
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
    case START_STOPWATCH:
      return {
        ...state, isRunning: true
      }
    case HIDE_STOPWATCH:
      return {
        ...state, isRunning: false
      }
    default: return state
  }
}
