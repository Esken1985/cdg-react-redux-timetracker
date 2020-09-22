import React, { useState, useContext } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  deleteIssue,
  cloneIssue,
  editIssue,
} from "../../../../../redux/actions/actionCreators";
import IssueInfo from "./IssueInfo";
import _ from "lodash";
import Dropdown from "../../../../Aside/AddNewWorklog/Dropdown";
import IssueProgress from "./IssueProgress/IssueProgress";
import dot from "../../../../../assets/issue-more-dot.svg";
import ModalContext from "../../../../../context/modalContext";

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
  margin-bottom: 7px;
  transition: 0.2s;
  &:hover {
    background: #ffffff;
    box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
    border-radius: 10px 10px 10px 10px;
    &:after {
      content: ":";
      background-color: #3744bd;
      position: absolute;
      right: -35px;
      color: #ffffff;
      font-size: 36px;
      top: 0;
      padding: 24px 16px 29px 15px;
      border-radius: 0px 10px 10px 0px;
    }
  }
`;
const DropdownContainer = styled.div`
  position: absolute;
  z-index: 5;
  top: 90px;
  right: -37px;
`;
const DotsBlock = styled.div`
  width: 37px;
  height: 88px;
  position: absolute;
  right: -35px;
  top: 0;
  z-index: 3;
`;

const Issue = ({ issue, deleteIssue, cloneIssue, editIssue }) => {
  const [isDropped, setIsDropped] = useState(false);
  const context = useContext(ModalContext);

  // const prevIssueIndex = _.findLastIndex(issues) - 1;
  // const prevIssue = issues[prevIssueIndex]

  const handleDropHide = () => setIsDropped(isDropped ? false : true);
  const handleDeleteIssue = () => {
    deleteIssue(issue.id);
  };
  const handleCloneIssue = () => {
    cloneIssue(issue.id);
    context.openModal()
    handleDropHide();
  };

  return (
    <>
      <IssueContainer>
        <IssueBox onMouseLeave={() => setIsDropped(false)}>
          <IssueInfo issue={issue} />
          <IssueProgress issue={issue} />
          <DotsBlock onClick={handleDropHide} />
          <DropdownContainer>
            <Dropdown
              isDropped={isDropped}
              deleteIssue={handleDeleteIssue}
              cloneIssue={handleCloneIssue}
            />
          </DropdownContainer>
        </IssueBox>
      </IssueContainer>
    </>
  );
};

const mapDispatchToProps = {
  deleteIssue,
  cloneIssue,
  editIssue,
};

export default connect(null, mapDispatchToProps)(Issue);
