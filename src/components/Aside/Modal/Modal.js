import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ModalForm from "./ModalForm.js";

const ModalDisplay = styled.div`
  display: none;
  &.shown {
    display: block;
  }
`;
const ModalOverlay = styled.div`
  position: absolute;
  z-index: 10;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(41, 41, 41, 0.2);
`;
const ModalWindow = styled.div`
  width: 100%;
  max-width: 660px;
  background-color: #ffffff;
  border-radius: 10px;
  display: inline-block;
  position: absolute;
  z-index: 20;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
  justify-self: center;
`;
const ModalHeader = styled.h3`
  background-color: #f8f8f8;
  padding: 30px 0px 30px 56px;
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
`;
const ModalContent = styled.div``;
const ModalContainer = styled.div`
  width: 100%;
  max-width: 543px;
  margin: 0 auto;
`;

const Modal = ({ isShown, close, startStopwatch, closeStopwatch }) => {
  return ReactDOM.createPortal(
    <ModalDisplay className={isShown ? "shown" : ""}>
      <ModalOverlay>
        <ModalWindow>
          <ModalHeader>New Worklog</ModalHeader>
          <ModalContainer>
            <ModalContent>
              <ModalForm close={close} startStopwatch={startStopwatch} closeStopwatch={closeStopwatch} />
            </ModalContent>
          </ModalContainer>
        </ModalWindow>
      </ModalOverlay>
    </ModalDisplay>,
    document.getElementById("modal-root")
  );
};

export default Modal;
