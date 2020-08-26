import React from "react";
import styled from "styled-components";
import IssuesBlock from "./IssuesBlock/IssuesBlock";
import IssuesSectionTop from "./IssuesSectionTop/IssuesSectionTop";

export const IssuesSectionWrapper = styled.section`
  border-right: 1px solid #e9ecf2;
`;


function IssuesSection() {
  return (
    <IssuesSectionWrapper>
      <IssuesSectionTop />
      <IssuesBlock />
    </IssuesSectionWrapper>
  );
}


export default IssuesSection;
