import React from "react";
import styled from "styled-components";
import _ from "lodash";
import dwnldbtn from "../../../../assets/dwnldbtn.svg";

const IssuesBlockTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 19px;
  padding-top: 47px;
  border-bottom: 1px solid #e9ecf2;
`;
const Date = styled.p`
  font-size: 24px;
  padding-left: 19px;
`;
const Day = styled.span`
  color: #1e1e1e;
  font-weight: bold;
`;
const TotalProgress = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 34px;
`;
const DownloadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background-color: #e9ecf2;
  border-radius: 50%;
  transition: 0.2s;
  &:hover {
    background: #ffffff;
    box-shadow: 0px 7px 15px rgba(148, 156, 160, 0.13);
  }
`;
const TotalHours = styled.div`
  margin-right: 47px;
  & p {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: #bbbbbb;
    padding-bottom: 8px;
  }
    & progress {
      width: 100px;
      height: 6px;
      border-radius: 4px;
      background-color: #e9ecf2;
    }
    & progress::-webkit-progress-bar {
      background-color: #e9ecf2;
      border-radius: 6px;
    }
    & progress::-webkit-progress-value {
      background: ${props => props.max === props.value ? '#62D2B1': '#ffcc40'};
      border-radius: 6px;
    }
    & progress::-moz-progress-bar {
      background-color: #e9ecf2;
      border-radius: 6px;
    }
`;

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

const IssuesBlockTop = ({ issuesBlock, issues }) => {
  const issuesDurationArr = issues.map((issue) => {
    if (issuesBlock.blockDate === issue.date) return issue.duration;
  });
  const totalDuration = msToTime(_.sum(issuesDurationArr));
  const curDayIssuesArr = issues.map((issue) => {
    if (issuesBlock.blockDate === issue.date) return issue;
  });
  const issuesAmount = _.lastIndexOf(curDayIssuesArr)
  const value = 2

  return (
    <IssuesBlockTopContainer>
      <Date>
        <Day>{issuesBlock.blockDate}</Day>
      </Date>
      <TotalProgress>
        <TotalHours value={value} max={issuesAmount}>
          <p> {totalDuration} </p>
          <progress value={value} max={issuesAmount}></progress>
        </TotalHours>
        <DownloadBtn>
          <img src={dwnldbtn} alt="download" />
        </DownloadBtn>
      </TotalProgress>
    </IssuesBlockTopContainer>
  );
};

export default IssuesBlockTop;
