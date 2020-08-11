import React from "react";
import styled from "styled-components";
import {connect} from "react-redux"
import IssuesBlockTop from "./IssuesBlockTop";
import Issue from "../IssuesBlock/Issue/Issue";
import uuid from "react-uuid";


const IssuesBlockWrap = styled.div`
  width: 100%;
  max-width: 1159px;
`;

const IssuesBlock = ({issueDetails}) => {
  console.log({issueDetails})
  return (
    <IssuesBlockWrap>
      <IssuesBlockTop />
      {
        !issueDetails.length ?
        <div>No Worklogs</div> : 
        issueDetails.map(issue => <Issue issue={issue} key={uuid()} />)
      }
      
    </IssuesBlockWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    issueDetails: state.issues.issues
  }
}

export default connect(mapStateToProps, null)(IssuesBlock);
