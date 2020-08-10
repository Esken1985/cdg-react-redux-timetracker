import React, { useState } from "react";
import {connect} from "react-redux";
import {createIssue} from "../../../redux/actions/actionCreators"
import uuid from "react-uuid";
import styled from "styled-components";
import ModalButton from "./ModalButton.js";
import acceptbtn from "../../../assets/acceptbtn.svg";
import cancelbtn from "../../../assets/cancelbtn.svg";

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
const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;


const ModalForm = ({close, createIssue}) => {
  const [inputState, setState] = useState({
    worklogname: "",
    issuename: "",
    date: "",
    time: ""
  })

  const inputChangeHandler = event => {
    event.persist()
    setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const {worklogname, issuename} = inputState
    const newIssue = {
      worklogname, issuename, date: Date.now(), timefrom: "9:00", timeto: "10:00", duration: "01:00:00", id: uuid()
    }
    createIssue(newIssue)
    close()
  }

  return (
    <ModalFormBox onSubmit={submitHandler}>
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
      </InputBox>
      <ModalButtonsContainer>
              <ModalButton  type="submit">
                <img src={acceptbtn} alt="accept" />
              </ModalButton>
              <ModalButton close={close} type="button">
                <img src={cancelbtn} alt="cancel" />
              </ModalButton>
            </ModalButtonsContainer>
    </ModalFormBox>
  );
};

const mapDispatchToProps = {
  createIssue
}

export default connect(null, mapDispatchToProps)(ModalForm);
