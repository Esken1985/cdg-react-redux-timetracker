import React from "react";
import styled from "styled-components";
import AddNewWorklog from "./AddNewWorklog/AddNewWorklog";
import CalendarSync from "./CalendarSync/CalendarSync";


const AsideContainer = styled.div`
    width: 100%;
    max-width: 624px;
    padding-top: 103px;
`;

const Aside = () => {
  return (
    <AsideContainer>
        <AddNewWorklog />
        <CalendarSync />
    </AsideContainer>
  );
};

export default Aside;
