import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment"
import _ from "lodash";
import { connect } from "react-redux";
import IssuesBlock from "./IssuesBlock/IssuesBlock";
import IssuesSectionTop from "./IssuesSectionTop/IssuesSectionTop";

const IssuesSectionWrapper = styled.section`
  border-right: 1px solid #e9ecf2;
`;

function IssuesSection({ issuesBlocks, issues }) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const reversedIssueBlocks = [...issuesBlocks].reverse();
  const currDay = moment(issuesBlocks.blockDate).format("yyyy-MM-DD");
  const issuesByDate = _.groupBy(issues, "date");
  for (let key in issuesByDate) {
    if(key === currDay){
      console.log(issuesByDate[key])
    }
}

  return (
    <IssuesSectionWrapper>
      <IssuesSectionTop
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      {!issuesBlocks.length && !issues.length
        ? null
        : reversedIssueBlocks.map((issuesBlock) => (
            <IssuesBlock
              issuesBlock={issuesBlock}
              key={issuesBlock.blockDate}
              issues={issues}
            />
          ))}
    </IssuesSectionWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues,
    issuesBlocks: state.issuesBlocks.issuesBlocks,
  };
};

export default connect(mapStateToProps)(IssuesSection);
