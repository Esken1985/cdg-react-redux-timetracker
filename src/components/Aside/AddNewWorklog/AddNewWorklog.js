import React, { useState } from "react";
import styled from "styled-components";
import AddNewWorklogTop from "./AddNewWorklogTop";
import AddNewWorklogBtn from "./AddNewWorklogBtn";
import Modal from "../Modal/Modal";
import Dropdown from "./Dropdown";
// import StopWatch from "../StopWatch/StopWatch";

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
  // const [isStopwatchOn, setStopwatchOn] = useState(false);

  const closeModalHandler = () => setModalShown(false);
  const openModalHandler = () => setModalShown(true);
  const handleDropHide = () => setIsDropped(isDropped ? false : true);
  // const startStopwatch = () => setStopwatchOn(true);

  return (
    <BlockContainer>
      <AddNewWorklogTop drop={handleDropHide} isDropped={isDropped} />
      <DropdownContainer>
        <Dropdown isDropped={isDropped} />
      </DropdownContainer>
      <AddNewWorklogBtn openModal={openModalHandler} />
      {/* {
          isStopwatchOn ? null : <AddNewWorklogBtn openModal={openModalHandler} />
        } */}
      {/* {
          isStopwatchOn ? <StopWatch/> : null
        } */}
      <Modal
        isShown={isModalShown}
        close={closeModalHandler}
        // startStopwatch={startStopwatch}
      />
    </BlockContainer>
  );
};

export default AddNewWorklog;
