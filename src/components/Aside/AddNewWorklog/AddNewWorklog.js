import React, { useState, useContext } from "react";
import styled from "styled-components";
import AddNewWorklogTop from "./AddNewWorklogTop";
import AddNewWorklogBtn from "./AddNewWorklogBtn";
import Modal from "../Modal/Modal";
import Dropdown from "./Dropdown";
import StopWatch from "../StopWatch/StopWatch";
import ModalContext from "../../../context/modalContext";

const BlockContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #e9ecf2;
`;
const DropdownContainer = styled.div`
  position: absolute;
  top: 22px;
  right: 0;
`;

const AddNewWorklog = () => {
  // const [isModalShown, setModalShown] = useState(false);
  const context = useContext(ModalContext)
  
  const [isDropped, setIsDropped] = useState(false);
  const [isStopwatchOn, setStopwatchOn] = useState(false);
  const [startPoint, setStartPoint] = useState({ startTime: "" });
  const [endPoint, setEndPoint] = useState({ endTime: "" });

  // const closeModalHandler = () => setModalShown(false);
  // const openModalHandler = () => setModalShown(true);
  const handleDropHide = () => setIsDropped(isDropped ? false : true);
  const startStopwatch = () => setStopwatchOn(true);
  const closeStopwatch = () => setStopwatchOn(false);
  const setStartTime = () => setStartPoint({ startTime: Date.now() });
  const setEndTime = () => setEndPoint({ endTime: Date.now() });
  // const duration = endPoint.endTime - startPoint.startTime

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
          openModal={context.openModal}
        />
      ) : (
        <AddNewWorklogBtn startStopwatch={startStopwatch} />
      )}
      <Modal
        // isShown={isModalShown}
        closeModal={context.closeModal}
        startStopwatch={startStopwatch}
        closeStopwatch={closeStopwatch}
        startTime={startPoint.startTime}
        endTime={endPoint.endTime}
      />
    </BlockContainer>
  );
};

export default AddNewWorklog;
