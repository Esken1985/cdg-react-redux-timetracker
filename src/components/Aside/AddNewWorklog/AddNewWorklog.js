import React, { useState, useContext } from "react";
import {connect} from "react-redux"
import styled from "styled-components";
import AddNewWorklogTop from "./AddNewWorklogTop";
import AddNewWorklogBtn from "./AddNewWorklogBtn";
import Modal from "../Modal/Modal";
import Dropdown from "./Dropdown";
import StopWatch from "../StopWatch/StopWatch";
import ModalContext from "../../../context/modalContext";
import { alertContext } from "../../../context/alertContext";

const BlockContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #e9ecf2;
`;
const DropdownContainer = styled.div`
  position: absolute;
  top: 22px;
  right: 0;
`;


const AddNewWorklog = ({issues}) => {
  const context = useContext(ModalContext)
  const {openAlert} = useContext(alertContext)
  
  const [isDropped, setIsDropped] = useState(false);
  const [isStopwatchOn, setStopwatchOn] = useState(false);
  const [startPoint, setStartPoint] = useState({ startTime: "" });
  const [endPoint, setEndPoint] = useState({ endTime: "" });

  const handleDropHide = () => setIsDropped(isDropped ? false : true);
  const startStopwatch = () => setStopwatchOn(true);
  const closeStopwatch = () => setStopwatchOn(false);
  const setStartTime = () => setStartPoint({ startTime: Date.now() });
  const setEndTime = () => setEndPoint({ endTime: Date.now() });

  const duration = endPoint.endTime - startPoint.startTime

  return (
    <BlockContainer>
      <AddNewWorklogTop drop={handleDropHide} isDropped={isDropped} />
      <DropdownContainer onMouseLeave={() => {setIsDropped(false)}}>
        <Dropdown isDropped={isDropped}/>
      </DropdownContainer>
      {isStopwatchOn ? (
        <StopWatch
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          duration={duration}
          openModal={context.openModal}
          openAlert={openAlert}
          issues={issues}
        />
      ) : (
        <AddNewWorklogBtn startStopwatch={startStopwatch} />
      )}
      <Modal
        closeModal={context.closeModal}
        startStopwatch={startStopwatch}
        closeStopwatch={closeStopwatch}
        startTime={startPoint.startTime}
        endTime={endPoint.endTime}
      />
    </BlockContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues
  }
}
export default connect(mapStateToProps)(AddNewWorklog);
