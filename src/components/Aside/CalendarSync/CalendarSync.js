import React, {useState} from "react";
import styled from "styled-components";
import SyncSwitch from "./SyncSwitch";
import SyncTaskCard from "./SyncTaskCard";
import calendar from "../../../assets/calendar.svg";

const CalendarSyncContainer = styled.div`

`;
const Header = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #1e1e1e;
  padding-left: 38px;
  margin-right: 10px;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 31px;
`;
const CalendarImg = styled.img`
margin-left: 238px;
`;

const CalendarSync = () => {
    const [state, setState] = useState({
        checked: false,
      });
  
      const handleChange = (event) => {
          setState({ ...state, [event.target.name]: event.target.checked });
        };
  return (
    <CalendarSyncContainer>
      <TopContainer>
        <Header>Google calendar sync</Header>
        <SyncSwitch state={state} handleChange={handleChange} />
        <CalendarImg src={calendar} alt={calendar} />
      </TopContainer>
      {
          !state.checked ? null : <SyncTaskCard />
      }
    </CalendarSyncContainer>
  );
};

export default CalendarSync;
