import React, {useMemo} from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { format } from "date-fns";
import IssuesBlock from "./IssuesBlock/IssuesBlock";
import IssuesSectionTop from "./IssuesSectionTop/IssuesSectionTop";
import IssuesBlockTop from "./IssuesBlock/IssuesBlockTop";

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


function IssuesSection({ issues }) {
  const date = format(new Date(), "EEE, MMMM dd");
  return (
    <IssuesSectionWrapper>
      <IssuesSectionTop />
      {
        useMemo(() =>
        <IssuesBlockTop issues={issues} date={date}/>
      , [issues, date])
      }
      {!issues.length ? (
        <NoIssues>No Worklogs Today</NoIssues>
      ) : (
        issues.map((issue) => <IssuesBlock issue={issue} key={issue.id} />)
      )}
    </IssuesSectionWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues,
  };
};

export default connect(mapStateToProps, null)(IssuesSection);
