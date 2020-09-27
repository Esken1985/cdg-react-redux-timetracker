import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { alertContext } from "../../context/alertContext";

const Dialog = styled.div`
  width: 100%;
  max-width: 343px;
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: #ffffff;
  box-shadow: 0px 7px 15px rgba(148, 156, 160, 0.13);
  border-radius: 20px;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 275px;
  min-height: 56px;
  margin: 0 auto;
  font-weight: 500;
  font-size: 18px;
  color: #1e1e1e;
  margin-top: 15px;
  margin-bottom: 22px;
`;
const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px 25px 0 34px;
  align-items: center;
`;
const CloseButton = styled.button`
  background-color: #ffffff;
  color: #c4cacb;
`;
const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: yellow;
`;

const AlertDialog = (props) => {
    const {closeAlert} = useContext(alertContext)
  return (
    <Dialog>
      <TopPart>
        <Circle />
        <CloseButton onClick={closeAlert}>&#215;</CloseButton>
      </TopPart>
      <Text>{props.children}</Text>
    </Dialog>
  );
};

export default AlertDialog;
