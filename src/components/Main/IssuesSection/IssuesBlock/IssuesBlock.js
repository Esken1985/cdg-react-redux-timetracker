import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Issue from "../IssuesBlock/Issue/Issue";
import IssuesBlockTop from "../IssuesBlock/IssuesBlockTop";

const IssuesBlockWrap = styled.div`
  width: 100%;
  max-width: 1159px;
`;
const NoIssues = styled.div`
  display: flex;
  justify-content: center;
  font-size: 48px;
  padding: 19px;
  border-bottom: 1px dashed #e9ecf2;
`;


const IssuesBlock = ({ issues, issuesHeaders }) => {
  return (
    <IssuesBlockWrap>
      {!issuesHeaders.length ? (
         null 
      ) : (
        issuesHeaders.map((issueHeader) => <IssuesBlockTop issues={issues} issueHeader={issueHeader} key={issueHeader.id}/>) 
        )}
      {!issues.length ? (
        <NoIssues>No Worklogs</NoIssues>
      ) : (
        issues.map((issue) => <Issue issue={issue} key={issue.id} />)
      )}
    </IssuesBlockWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues,
    issuesHeaders: state.issuesHeaders.issuesHeaders
  };
};

export default connect(mapStateToProps, null)(IssuesBlock);
