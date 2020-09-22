import React from "react";
import styled from "styled-components";
import IssuesSortingLinks from "./IssuesSortingLinks/IssuesSortingLinks"
import MaterialDatePicker from "./IssuesDatePicker/MaterialDatePicker";
import DatePicker from './IssuesDatePicker/DatePicker'


export const IssuesSectionTopContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 81px 141px 47px 14px;
`;


const IssuesSectionTop = ({selectedDate, handleDateChange}) => {
  
  return (
    <IssuesSectionTopContainer>
      <DatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />
      <IssuesSortingLinks />
    </IssuesSectionTopContainer>
  );
};

export default IssuesSectionTop;
