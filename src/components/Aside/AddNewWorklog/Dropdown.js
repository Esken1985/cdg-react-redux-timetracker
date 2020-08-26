import React from "react";
import styled from "styled-components";

const DropdownBox = styled.div`
  width: 169px;
  height: 192px;
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
  border-radius: 10px;
  display: none;
  transition: all .2s;
  &.dropped {
    display: block;
  }
`;
const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 23px;
  font-size: 16px;
  line-height: 144.2%;
  color: #4f4f4f;
`;
const DropdownItem = styled.div`
  cursor: pointer;
  margin-bottom: 18px;
  &:last-child{
    margin-bottom: 0px;
  }
`;
const Link = styled.a`
  color: #4f4f4f;
  margin-bottom: 18px;
`;

const Dropdown = ({isDropped, deleteIssue, cloneIssue}) => {
  return (
    <DropdownBox className={isDropped ? "dropped" : ""}>
      <DropdownContainer>
        <Link href="#">Jira link</Link>
        <DropdownItem onClick={cloneIssue} >Duplicate</DropdownItem>
        <DropdownItem>Add to favorite</DropdownItem>
        <DropdownItem onClick={deleteIssue} >Delete</DropdownItem>
      </DropdownContainer>
    </DropdownBox>
  );
};

export default Dropdown;
