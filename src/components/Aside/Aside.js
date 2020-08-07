import React from "react";
import styled from "styled-components";
import AddNewWorklog from "./AddNewWorklog/AddNewWorklog";


const AsideContainer = styled.div`
    width: 100%;
    max-width: 624px;
`;

const Aside = () => {
  return (
    <AsideContainer>
        <AddNewWorklog />
    </AsideContainer>
  );
};

export default Aside;
