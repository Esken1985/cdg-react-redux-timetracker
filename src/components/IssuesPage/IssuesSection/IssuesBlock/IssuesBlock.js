import React from "react";
import _ from "lodash"
import styled from "styled-components";
import Issue from "./Issue/Issue";
import IssuesBlockTop from "./IssuesBlockTop";
import IssuesTimeline from "./IssuesTimeline/IssuesTimeline";

const IssuesBlockWrap = styled.div`
  width: 100%;
  max-width: 1159px;
`;

const IssuesBlock = ({ issues, issuesBlock }) => {
  
  return (
    <IssuesBlockWrap>
      <IssuesBlockTop issuesBlock={issuesBlock} issues={issues} />  
      {issues.map((issue) => issuesBlock.blockDate === issue.date ? <Issue issue={issue} key={issue.id} issues={issues}/> : null)}
      <IssuesTimeline/>
    </IssuesBlockWrap>
  );
};

export default IssuesBlock;
