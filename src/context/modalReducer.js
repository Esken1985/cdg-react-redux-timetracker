import { CLOSE_MODAL, OPEN_MODAL } from "../redux/actions/actionTypes";

const openModal = (state) => {
    return {
        ...state,
        modalIsOpen: true
    }
}
const closeModal = (state) => {
    return {
       ...state,
       modalIsOpen: false
    }
}


export default (state, action) => {
  switch (action.type) {
      case OPEN_MODAL:
          return openModal(state)
      case CLOSE_MODAL:
          return closeModal(state)  
    default:
      return state;
  }
};
