import React from "react";
import styled from 'styled-components';
import IssueProgressBar from './IssueProgressBar';
import IssueButton from './IssueButton';

const IssueProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 31px;
`;
const IssueRunTime = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #bbbbbb;
  margin-right: 36px;
`;

const IssueProgress = ({issue}) => {
  return (
    <IssueProgressContainer>
      <IssueProgressBar />
      <IssueRunTime>{issue.duration}</IssueRunTime>
      <IssueButton />
    </IssueProgressContainer>
  );
};

export default IssueProgress;
