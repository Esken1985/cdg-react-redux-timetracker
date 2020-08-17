import React from "react";
import styled from "styled-components";
import Issue from "../IssuesBlock/Issue/Issue";


const IssuesBlockWrap = styled.div`
  width: 100%;
  max-width: 1159px;
`;

const IssuesBlock = ({issue}) => {
  console.log(issue);
  return (
    <IssuesBlockWrap>
      <Issue issue={issue}/>
    </IssuesBlockWrap>
  );
};


export default IssuesBlock;

// format(new Date(), "ccc, LLLL dd"), 