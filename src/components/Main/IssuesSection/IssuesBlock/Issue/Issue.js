import React from "react";
import styled from "styled-components";
import IssueInfo from "./IssueInfo";
import IssueProgress from "../Issue/IssueProgress/IssueProgress";

const IssueContainer = styled.div`
  width: 100%;
  max-width: 1157px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0px 7px 0px;
  border-bottom: 1px dashed #e9ecf2;
  position: relative;
  transition: 0.2s;
  &:hover {
    background: #ffffff;
    box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
    border-radius: 10px;
    &:after {
      content: url(../../../assets/verticaldots.svg);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 38px;
      height: 90px;
      border: 1px solid #e9ecf2;
      background-color: #3744bd;
      border-radius: 0px 10px 10px 0px;
      position: absolute;
      z-index: 2;
      right: -30px;
      bottom: -1px;
      opacity: 0;
      cursor: pointer;
    }
    &:hover:after {
      opacity: 1;
    }
  }
`;

const Issue = ({issue}) => {
  return (
    <IssueContainer>
      <IssueInfo issue={issue} />
      <IssueProgress issue={issue} />
    </IssueContainer>
  );
};



export default Issue;
