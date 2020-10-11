import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";
import _ from "lodash";
import Issue from "./Issue/Issue";
import IssuesBlockTop from "./IssuesBlockTop";
import IssuesTimeline from "./IssuesTimeline/IssuesTimeline";
import ModalContext from "../../../../context/modalContext";

const IssuesBlockWrap = styled.div`
  width: 100%;
  max-width: 1157px;
`;

const IssuesBlock = ({ issues, issuesBlock, currDayIssues }) => {
  const context = useContext(ModalContext);

  // const issueHashMap = {}
  // let accordionItems = currDayIssues.filter((item, _) => {
  //   let alreadyExists = issueHashMap.hasOwnProperty(item.worklogname || item.issuename)
  //   return alreadyExists ? false : issueHashMap[item.worklogname || item.issuename] = 1
  // })
  // console.log(accordionItems);
  

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
