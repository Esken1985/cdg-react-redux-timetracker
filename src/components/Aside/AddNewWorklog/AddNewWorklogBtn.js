import React from "react";
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ButtonIcon = styled.div`
    width: 66px;
    height: 66px;
    background-color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3744BD;
    font-size: 24px;
    cursor: pointer;
`;
const ButtonText = styled.h3`
    font-size: 18px;
    text-align: center;
    color: #C4CACB;
    padding: 22px 0px 125px 0px;
`;

const AddNewWorklogBtn = ({openModal}) => {
  return (
    <ButtonWrapper>
      <ButtonIcon onClick={openModal}>&#43;</ButtonIcon>
      <ButtonText>New Worklog</ButtonText>
    </ButtonWrapper>
  );
};

export default AddNewWorklogBtn;
