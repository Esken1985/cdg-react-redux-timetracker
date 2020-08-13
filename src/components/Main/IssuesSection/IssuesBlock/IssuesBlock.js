import React, {useState} from "react";
import styled from "styled-components";
import IssuesBlockTop from "./IssuesBlockTop";
import Issue from "../IssuesBlock/Issue/Issue";


const IssuesBlockWrap = styled.div`
  width: 100%;
  max-width: 1159px;
`;


const IssuesBlock = ({issue}) => {

  return (
    <IssuesBlockWrap>
      <IssuesBlockTop issue={issue}/>
      <Issue issue={issue}/>
    </IssuesBlockWrap>
  );
};

export default IssuesBlock;
