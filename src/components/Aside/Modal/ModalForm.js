import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import {
  createIssue,
  createIssuesBlock,
} from "../../../redux/actions/actionCreators";
import { alertContext } from "../../../context/alertContext";
import uuid from "react-uuid";
import { format } from "date-fns";
import styled from "styled-components";
import ModalButton from "./ModalButton.js";
import ModalTimeRange from "./ModalTimeRange/ModalTimeRange.js";
import acceptbtn from "../../../assets/acceptbtn.svg";
import cancelbtn from "../../../assets/cancelbtn.svg";
// import ModalContext from "../../../context/modalContext";

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

const ModalForm = ({
  createIssue,
  closeStopwatch,
  createIssuesBlock,
  startTime,
  endTime,
  closeModal,
}) => {
  const initialInputState = {
    worklogname: "",
    issuename: "",
    worklognameError: "",
    issuenameError: "",
  };
  const [inputState, setInputState] = useState(initialInputState);
  const { openAlert, closeAlert } = useContext(alertContext);
  // const [timeRangeValues, setTimeRangeValues] = useState({
  //   values: [startTime, endTime],
  // });
  const timeRangeValues = [];
  timeRangeValues.push(startTime);
  timeRangeValues.push(endTime);

  // const startTimeInMS = timeRangeValues.values[0];
  // const endTimeInMS = timeRangeValues.values[1];
  // const duration = endTimeInMS - startTimeInMS;

  // function updateValues(values) {
  //   setTimeRangeValues({
  //     values,
  //   });
  // }

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
    // const startTime = timeRangeValues.values[0];
    // const endTime = timeRangeValues.values[1];
    const date = format(new Date(), "EEE, MMMM dd");
    const isValid = validate();
    const newIssuesBlockDate = {
      blockDate: date,
    };
    const newIssue = {
      worklogname,
      issuename,
      date,
      startTime: format(startTime, "HH:mm"),
      endTime: format(endTime, "HH:mm"),
      duration: endTime - startTime,
      id: uuid(),
    };
    if (isValid) {
      createIssuesBlock(newIssuesBlockDate);
      createIssue(newIssue);
      closeModal();
      closeStopwatch();
      setInputState(initialInputState);
    }
    if (newIssue.duration < 60000) {
      // newIssue.endTime = startTime + 60000
      newIssue.duration = 60000;
      openAlert();
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
        <ModalButton
          type="submit"
        >
          <img src={acceptbtn} alt="accept" />
        </ModalButton>
        <ModalButton
          closeModal={closeModal}
          closeAlert={closeAlert}
          type="button"
        >
          <img src={cancelbtn} alt="cancel" />
        </ModalButton>
      </ModalButtonsContainer>
    </ModalFormBox>
  );
};

const mapDispatchToProps = {
  createIssue,
  createIssuesBlock,
};

export default connect(null, mapDispatchToProps)(ModalForm);
