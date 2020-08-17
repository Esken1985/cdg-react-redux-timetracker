import React from "react";
import styled from 'styled-components';
import IssueProgressBar from './IssueProgressBar';
import IssueButton from './IssueButton';

const IssueProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 31px;
  position: relative;
`;
const IssueRunTime = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #bbbbbb;
  margin-right: 36px;
`;

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)
  let  hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

 hours = (hours < 10) ? "0" + hours : hours;
 minutes = (minutes < 10) ? "0" + minutes : minutes;
 seconds = (seconds < 10) ? "0" + seconds : seconds;

 return hours + ":" + minutes + ":" + seconds;
}

const IssueProgress = ({issue}) => {
  const duration = msToTime(issue.duration)
  return (
    <IssueProgressContainer>
      <IssueProgressBar />
      <IssueRunTime>{duration}</IssueRunTime>
      <IssueButton />
    </IssueProgressContainer>
  );
};

export default IssueProgress;
