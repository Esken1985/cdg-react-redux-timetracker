import React, { useState } from "react";
import styled from "styled-components";
import AddNewWorklogTop from "./AddNewWorklogTop";
import AddNewWorklogBtn from "./AddNewWorklogBtn";
import Modal from '../Modal/Modal';

const BlockContainer = styled.div`
    position: relative;
`;
const Overlay = styled.div`
    background: rgba(63, 61, 61, 0.692);
    height: 100%;
    position: fixed;
    transition: all 1.3s;
    width: 100%;
`;

const AddNewWorklog = () => {
    const [isShown, setIsShown] = useState(false);

    const closeModalHandler = () => setIsShown(false);
    const openModalHandler = () => setIsShown(true);

  return (
      <BlockContainer>
        <AddNewWorklogTop />
        <AddNewWorklogBtn openModal={openModalHandler} />
        <Modal isShown={isShown} close={closeModalHandler}/>
      </BlockContainer>
  )
};

export default AddNewWorklog;
