import React, {useContext, useState} from "react";
import _ from "lodash";
import styled from "styled-components";
import Issue from "./Issue/Issue";
import IssuesBlockTop from "./IssuesBlockTop";
import IssuesTimeline from "./IssuesTimeline/IssuesTimeline";
import ModalContext from "../../../../context/modalContext";


const IssuesBlockWrap = styled.div`
  width: 100%;
  max-width: 1157px;
`;

const IssuesBlock = ({ issues, issuesBlock }) => {
  const context = useContext(ModalContext);

  return (
    <IssuesBlockWrap>
      <IssuesBlockTop issuesBlock={issuesBlock} issues={issues} />
      {issues.map((issue) =>
        issuesBlock.blockDate === issue.date ? (
          <Issue issue={issue} key={issue.id} issues={issues} />
        ) : null
      )}
      <IssuesTimeline addIssueToTimeline={context.openModal} />
    </IssuesBlockWrap>
  );
};

export default IssuesBlock;
