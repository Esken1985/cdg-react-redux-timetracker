import React, { useState } from "react";
import styled from "styled-components";
import playbtn from "../../../../../../assets/playbtn.svg";
import stopbtn from "../../../../../../assets/stopbtn.svg";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background-color: #f0f3f5;
  border-radius: 50%;
`;

const IssueButton = () => {
  const [btnState, setState] = useState(true);

  const playStop = () => {
    if(btnState){
        setState(false)
    }else{
        setState(true)
    }
  };

  return (
    <Button>
      <img src={btnState ? playbtn : stopbtn} onClick={() => playStop()} alt="button"/>
    </Button>
  );
};

export default IssueButton;
