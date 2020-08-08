import React, { useState } from "react";
import styled from "styled-components";

const ModalFormBox = styled.form`
  margin-bottom: 44px;
`;
const InputBox = styled.div`
  &:first-child {
    margin-bottom: 22px;
  }
`;
const InputLabel = styled.label`
  display: block;
  font-size: 10px;
  color: #4f4f4f;
  margin-bottom: 6px;
`;
const Input = styled.input`
  border-bottom: 1px solid #e9ecf2;
  max-width: inherit;
  width: 100%;
  &::-webkit-input-placeholder {
    font-size: 12px;
    color: rgb(196, 202, 203, 0.5);
  }
`;

const ModalForm = () => {
  const [worklogname, setWorklogname] = useState("");
  const [issue, setIssue] = useState("");

  const onWorklognameChange = (e) => {
    setWorklogname(e.target.value);
  };
  const onIssueChange = (e) => {
    setIssue(e.target.value);
  };

  return (
    <ModalFormBox>
      <InputBox>
        <InputLabel htmlFor="">Worklog Name</InputLabel>
        <Input
          type="text"
          placeholder="Enter the worklog name"
          value={worklogname}
          onChange={onWorklognameChange}
        />
      </InputBox>
      <InputBox>
        <InputLabel htmlFor="">Issue</InputLabel>
        <Input
          type="text"
          placeholder="Enter the issue name"
          value={issue}
          onChange={onIssueChange}
        />
      </InputBox>
    </ModalFormBox>
  );
};

export default ModalForm;
