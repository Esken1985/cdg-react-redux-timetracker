import {START_PAUSE_TIMER} from '../actions/actionTypes'
import {START_TIMER_ON_MOUNT} from '../actions/actionTypes'

const initialState = {
    hour: 0, 
    minute: 0, 
    second: 0, 
    isRunning: true
}

export const stopwatchReducer = (state = initialState, action) =>{
    switch (action.type) {
        case START_PAUSE_TIMER:
            if (state.isRunning) {
                clearInterval(timerID);
                ...state 
              } else {
                {isRunning: true}
                timerID = setInterval(() => {
                  (state, props) => {
                    return {
                      hour: state.hour == 59 ? state.hour + 1 : state.hour,
                      minute: state.second == 59 ? state.minute + 1 : state.minute,
                      second: state.second == 59 ? 0 : state.second + 1,
                    };
                  };
                }, 1000);
              }
        case START_TIMER_ON_MOUNT:
            timerID = setInterval(() => {
                (state, props) => {
                  return {
                    hour: state.hour == 59 ? state.hour + 1 : state.hour,
                    minute: state.second == 59 ? state.minute + 1 : state.minute,
                    second: state.second == 59 ? 0 : state.second + 1,
                  };
                };
              }, 1000);
    }
}