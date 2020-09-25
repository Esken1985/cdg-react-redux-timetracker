import React, { useReducer } from "react";
import { Container } from "../../styled/styled";
import { IssuesPageGrid } from "../../styled/styled";
import IssuesSection from "./IssuesSection/IssuesSection";
import Aside from "../Aside/Aside";

import ModalContext from "../../context/modalContext";
import modalReducer from "../../context/modalReducer";
import { CLOSE_MODAL, OPEN_MODAL } from "../../redux/actions/actionTypes";

const IssuesPage = ({history}) => {
  console.log(history);
  const initialState = { modalIsOpen: false };
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const openModal = () => {
    dispatch({
      type: OPEN_MODAL,
    });
  };
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  return (
    <ModalContext.Provider
      value={{ modalIsOpen: state.modalIsOpen, openModal, closeModal }}
    >
      <Container>
        <IssuesPageGrid>
          <IssuesSection />
          <Aside />
        </IssuesPageGrid>
      </Container>
    </ModalContext.Provider>
  );
};

export default IssuesPage;
