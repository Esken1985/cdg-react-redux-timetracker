import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { connect } from "react-redux";
import IssuesBlock from "./IssuesBlock/IssuesBlock";
import IssuesSectionTop from "./IssuesSectionTop/IssuesSectionTop";

export const IssuesSectionWrapper = styled.section`
  border-right: 1px solid #e9ecf2;
`;

function IssuesSection({issuesBlocks, issues}) {
  console.log(issuesBlocks)
   return (
    <IssuesSectionWrapper  >
      <IssuesSectionTop />
      {
        !issuesBlocks.length && !issues.length ? null : issuesBlocks.map((issuesBlock) => <IssuesBlock issuesBlock={issuesBlock} key={issuesBlock.index} issues={issues} />)
      }
    </IssuesSectionWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues,
    issuesBlocks: state.issuesBlocks.issuesBlocks
  };
};

export default connect(mapStateToProps)(IssuesSection);
