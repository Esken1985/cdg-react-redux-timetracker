import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  deleteIssue,
  cloneIssue,
  startStopwatch,
} from "../../../../../redux/actions/actionCreators";
import IssueInfo from "./IssueInfo";
import _ from "lodash"
import Dropdown from "../../../../Aside/AddNewWorklog/Dropdown";
import IssueProgress from "./IssueProgress/IssueProgress";
import dot from "../../../../../assets/issue-more-dot.svg";

const IssueContainer = styled.div`
  display: flex;
  position: relative;
`;
const IssueBox = styled.div`
  width: 100%;
  max-width: 1157px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0px 7px 0px;
  border-bottom: 1px dashed #e9ecf2;
  position: relative;
  &:hover {
    background: #ffffff;
    box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
    border-radius: 10px 0 0 10px;
  }
`;
const MoreDots = styled.div`
  /* display: none; */
  position: absolute;
  background-color: #3744bd;
  border-radius: 0 10px 10px 0;
  right: -37px;
  width: 37px;
  height: 88px;
  padding-top: 34px;
  & img {
    padding-left: 15px;
    &:first-child {
      margin-bottom: 7px;
    }
  }
`;
const DropdownContainer = styled.div`
  position: absolute;
  z-index: 3;
  top: 91px;
  right: -37px;
`;


const Issue = ({ issue, issues, deleteIssue, cloneIssue }) => {
  const [isDropped, setIsDropped] = useState(false);

  const prevIssueIndex = _.findLastIndex(issues) - 1;
  const prevIssue = issues[prevIssueIndex]

  const handleDropHide = () => setIsDropped(isDropped ? false : true);
  const handleDeleteIssue = () => {
    deleteIssue(issue.id);
  };
  const handleCloneIssue = () => {
    cloneIssue(issue.id);
    startStopwatch();
    handleDropHide();
  };

  return (
    <>
      <IssueContainer>
        <IssueBox>
          <IssueInfo issue={issue} />
          <IssueProgress issue={issue} />
        </IssueBox>
        <DropdownContainer>
          <Dropdown
            isDropped={isDropped}
            deleteIssue={handleDeleteIssue}
            cloneIssue={handleCloneIssue}
          />
        </DropdownContainer>
        <MoreDots onClick={handleDropHide}>
          <img src={dot} alt="dot" />
          <img src={dot} alt="dot" />
        </MoreDots>
      </IssueContainer>
    </>
  );
};

const mapDispatchToProps = {
  deleteIssue,
  cloneIssue,
  startStopwatch,
};

export default connect(null, mapDispatchToProps)(Issue);
