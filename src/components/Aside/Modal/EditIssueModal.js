import React, { useState } from "react";
import { connect } from "react-redux";
import {editIssue} from "../../../redux/actions/actionCreators";
import uuid from "react-uuid";
import { format } from "date-fns";
import styled from "styled-components";
import ModalButton from "./ModalButton.js";
import ModalTimeRange from "./ModalTimeRange/ModalTimeRange.js";
import acceptbtn from "../../../assets/acceptbtn.svg";
import cancelbtn from "../../../assets/cancelbtn.svg";
import ModalContext from "../../../context/modalContext";

const ModalFormBox = styled.form`
  margin-bottom: 44px;
  position: relative;
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
  height: 31px;
  &::-webkit-input-placeholder {
    font-size: 12px;
    color: rgb(196, 202, 203, 0.5);
  }
`;
const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const Error = styled.div`
  font-size: 10px;
  color: #e34040;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 22px;
`;


const ModalForm = ({closeModal, editIssue}) => {
  const initialInputState = {
    worklogname: "",
    issuename: "",
    worklognameError: "",
    issuenameError: "",
  };
  const [inputState, setInputState] = useState(initialInputState);

  const inputChangeHandler = (event) => {
    event.persist();
    setInputState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  const validate = () => {
    let worklognameError = "";
    let issuenameError = "";
    if (!inputState.worklogname) {
      worklognameError = "Please, enter worklog name";
    }
    if (!inputState.issuename) {
      issuenameError = "Please, enter issue name";
    }

    if (worklognameError || issuenameError) {
      setInputState({ worklognameError, issuenameError });
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { worklogname, issuename } = inputState;
    const isValid = validate();
    if (isValid) {
      closeModal();
      closeStopwatch();
      setInputState(initialInputState);
    }
  };

  return (
    <ModalFormBox onSubmit={submitHandler}>
      <ModalTimeRange
        values={timeRangeValues}
        // updateValues={updateValues}
      />
      <InputBox>
        <InputLabel htmlFor="worklogname">Worklog Name</InputLabel>
        <Input
          type="text"
          id="worklogname"
          name="worklogname"
          placeholder="Enter the worklog name"
          value={inputState.worklogname}
          onChange={inputChangeHandler}
        />
        <Error>{inputState.worklognameError}</Error>
      </InputBox>
      <InputBox>
        <InputLabel htmlFor="issue">Issue</InputLabel>
        <Input
          type="text"
          id="issuename"
          name="issuename"
          placeholder="Enter the issue name"
          value={inputState.issuename}
          onChange={inputChangeHandler}
        />
        <Error>{inputState.issuenameError}</Error>
      </InputBox>
      <ModalButtonsContainer>
        <ModalButton type="submit">
          <img src={acceptbtn} alt="accept" />
        </ModalButton>
        <ModalButton closeModal={closeModal} type="button">
          <img src={cancelbtn} alt="cancel" />
        </ModalButton>
      </ModalButtonsContainer>
    </ModalFormBox>
  );
};

const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues
  }
}
const mapDispatchToProps = {
  editIssue
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);