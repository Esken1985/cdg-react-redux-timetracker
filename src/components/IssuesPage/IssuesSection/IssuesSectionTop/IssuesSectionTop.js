import React from "react";
import styled from "styled-components";
import IssuesDatePicker from "./IssuesDatePicker/IssuesDatePicker";
import IssuesSortingLinks from "./IssuesSortingLinks/IssuesSortingLinks"
import DatePicker from "./IssuesDatePicker/DatePicker";

export const IssuesSectionTopContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0px 141px 47px 14px;
`;


const IssuesSectionTop = () => {
  
  return (
    <IssuesSectionTopContainer>
      <DatePicker />
      <IssuesSortingLinks />
    </IssuesSectionTopContainer>
  );
};

export default IssuesSectionTop;
