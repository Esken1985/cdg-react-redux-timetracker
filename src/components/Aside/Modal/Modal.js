import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ModalForm from "./ModalForm.js";
import ModalButton from "./ModalButton.js";
import acceptbtn from "../../../assets/acceptbtn.svg";
import cancelbtn from "../../../assets/cancelbtn.svg";

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
  & h3 {
    padding: 30px 0px 30px 56px;
    font-weight: 500;
    font-size: 18px;
    color: #1e1e1e;
  }
`;
const ModalContent = styled.div``;
const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 46px;
`;
const ModalContainer = styled.div`
  width: 100%;
  max-width: 543px;
  margin: 0 auto;
`;
const TimeLine = styled.div`
  width: 100%;
  max-width: 543px;
  height: 54px;
  margin: 49px auto 29px;
`;
const TimeBar = styled.div`
  width: 100%;
  max-width: 543px;
  height: 10px;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const Modal = ({ isShown, close }) => {
  return ReactDOM.createPortal(
    <ModalDisplay className={isShown ? "shown" : ""}>
      <ModalOverlay>
        <ModalWindow>
          <ModalHeader>
            <h3>New Worklog</h3>
          </ModalHeader>
          <ModalContainer>
            <ModalContent>
              <TimeLine>
                <TimeBar></TimeBar>
                {/* <TimeDisplay></TimeDisplay> */}
              </TimeLine>
              <ModalForm />
            </ModalContent>
            <ModalButtonsContainer>
              <ModalButton>
                <img src={acceptbtn} alt="accept" />
              </ModalButton>
              <ModalButton close={close}>
                <img src={cancelbtn} alt="cancel" />
              </ModalButton>
            </ModalButtonsContainer>
          </ModalContainer>
        </ModalWindow>
      </ModalOverlay>
    </ModalDisplay>,
    document.getElementById("modal-root")
  );
};

export default Modal;
