import React from "react";
import styled from "styled-components";

const IssueInfoContainer = styled.div`
  display: flex;
  width: 570px;
`;
const IssueStateLine = styled.div`
  width: 3px;
  height: 76px;
  background-color: #e34040;
  border-radius: 1px;
`;
const IssueTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 28px;
  max-width: 185px;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  & span {
    margin-left: 7px;
    color: #bbbbbb;
  }
  & p {
    color: #1e1e1e;
  }
`;
const IssueTitle = styled.div`
  padding: 13px 131px 17px 27px;
  min-width: 200px;
  & p {
    font-size: 18px;
    color: #828282;
    margin-bottom: 9px;
  }
  & h3 {
    font-weight: 500;
    font-size: 20px;
    color: #1e1e1e;
  }
`;

const IssueInfo = ({issue}) => {
  const {startTime, endTime, issuename, worklogname} = issue
  return (
    <IssueInfoContainer>
      <IssueTime>
        <p>{startTime}</p>
        <span> - {endTime}</span>
      </IssueTime>
      <IssueStateLine />
      <IssueTitle>
        <p>{issuename}</p>
        <h3>{worklogname}</h3>
      </IssueTitle>
    </IssueInfoContainer>
  );
};

export default IssueInfo;
