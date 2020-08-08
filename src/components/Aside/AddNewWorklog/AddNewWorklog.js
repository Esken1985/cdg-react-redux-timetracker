import React, { useState } from "react";
import styled from "styled-components";
import AddNewWorklogTop from "./AddNewWorklogTop";
import AddNewWorklogBtn from "./AddNewWorklogBtn";
import Modal from '../Modal/Modal';
import Dropdown from "./Dropdown";

const BlockContainer = styled.div`
    position: relative;
`;

const AddNewWorklog = () => {
    const [isShown, setIsShown] = useState(false);
    const [isDropped, setIsDropped] = useState(false);

    const closeModalHandler = () => setIsShown(false);
    const openModalHandler = () => setIsShown(true);

    const handleDropHide = () => {
      if(!isDropped) {
        setIsDropped(true)
      }else{
        setIsDropped(false)
      }
    }

  return (
      <BlockContainer>
        <AddNewWorklogTop drop={handleDropHide} isDropped={isDropped}/>
        <Dropdown isDropped={isDropped}/>
        <AddNewWorklogBtn openModal={openModalHandler} />
        <Modal isShown={isShown} close={closeModalHandler}/>
      </BlockContainer>
  )
};

export default AddNewWorklog;
