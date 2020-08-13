import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import IssuesBlock from "./IssuesBlock/IssuesBlock";
import IssuesSectionTop from "./IssuesSectionTop/IssuesSectionTop";
import uuid from "react-uuid";

export const IssuesSectionWrapper = styled.section`
  border-right: 1px solid #e9ecf2;
`;
const NoIssues = styled.div`
    display: flex;
    justify-content: center;
    font-size: 48px;
    padding: 19px;
    border-bottom: 1px dashed #E9ECF2;
`;

function IssuesSection({ issueDetails }) {
  return (
    <IssuesSectionWrapper>
      <IssuesSectionTop />
      {!issueDetails.length ? (
        <NoIssues>No Worklogs Today</NoIssues>
      ) : (
        issueDetails.map((issue) => <IssuesBlock issue={issue} key={uuid()} />)
      )}
    </IssuesSectionWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    issueDetails: state.issues.issues,
  };
};

export default connect(mapStateToProps, null)(IssuesSection);
