import React, { useState } from "react";
import styled from "styled-components";
import AddNewWorklogTop from "./AddNewWorklogTop";
import AddNewWorklogBtn from "./AddNewWorklogBtn";
import Modal from "../Modal/Modal";
import Dropdown from "./Dropdown";
import StopWatch from "../StopWatch/StopWatch";

const BlockContainer = styled.div`
  position: relative;
`;
const DropdownContainer = styled.div`
  position: absolute;
  top: 22px;
  right: 0;
`;

const AddNewWorklog = () => {
  const [isDropped, setIsDropped] = useState(false);
  const [isModalShown, setModalShown] = useState(false);
  const [isStopwatchOn, setStopwatchOn] = useState(false);

  const closeModalHandler = () => setModalShown(false);
  const openModalHandler = () => setModalShown(true);
  const handleDropHide = () => setIsDropped(isDropped ? false : true);
  const startStopwatch = () => setStopwatchOn(true);
  const closeStopwatch = () => setStopwatchOn(false);
  return (
    <BlockContainer>
      <AddNewWorklogTop drop={handleDropHide} isDropped={isDropped} />
      <DropdownContainer>
        <Dropdown isDropped={isDropped} />
      </DropdownContainer>  
      {
          isStopwatchOn ? <StopWatch  openModal={openModalHandler} /> : <AddNewWorklogBtn startStopwatch={startStopwatch} />
      }
      <Modal
        isShown={isModalShown}
        close={closeModalHandler}
        startStopwatch={startStopwatch}
        closeStopwatch={closeStopwatch}
      />
    </BlockContainer>
  );
};

export default AddNewWorklog;
