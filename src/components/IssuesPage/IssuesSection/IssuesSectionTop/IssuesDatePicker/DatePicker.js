import React, { useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import datepicker from "../../../../../assets/datepicker.svg";

const DatePickerContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 462px;
  height: 472px;
  z-index: 10;
`;
const DatePickerBody = styled.div`
  width: 100%;
  max-width: 462px;
  height: 472px;
  background-color: #ffffff;
  cursor: pointer;
  user-select: none;
  box-shadow: 0px 7px 30px rgba(148, 156, 160, 0.08);
  border-radius: 10px;
  position: absolute;
  z-index: 12;
  top: 62px;
  left: 0;
  right: 0;
`;
const SelectedDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 197px;
  height: 58px;
  border-radius: 30px;
  background-color: #f0f3f5;
  font-size: 18px;
  line-height: 144.2%;
  text-align: right;
  color: #3744bd;
  transition: 0.2s;
  cursor: pointer;
  margin-bottom: 5px;
  &:hover {
    background-color: #ffffff;
  }
  & p {
    margin-right: 18px;
  }
`;
const Month = styled.div`
  display: flex;
  justify-content: center;
`;
const MonthName = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding: 37px 62px;
`;
const Weekdays = styled.div`
  list-style: none;
  color: #999999;
  max-width: 356px;
  height: 44px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Days = styled.div`
  max-width: 356px;
  height: 252px;
  color: #444444;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Today = styled(Day)`
  background: #3744bd;
  color: #ffffff;
  font-weight: bold;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 70px;
`;
const PrevDay = styled(Day)`
  color: #cccccc;
`;
const NextDay = styled(PrevDay)``;
const DateStatesInfo = styled.div`
  max-width: 356px;
  height: 44px;
  margin: 17px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const DateStateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DateState = styled.div`
  background-color: #62d2b1;
  width: 20px;
  height: 6px;
  border-radius: 48px;
  border: 1px solid #ffffff;
  margin-right: 4px;
`;
const DateStateProgress = styled(DateState)`
  background-color: #ffcc40;
`;
const DateStateMissed = styled(DateState)`
  background-color: #e34040;
`;

const DatePicker = () => {
  const [isHidden, setIsHidden] = useState(true);
  const date = new Date();
  date.setDate(1);
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = date.getMonth();
  const daysArr = [];
  const prevDaysArr = [];
  const nextDaysArr = [];
  const firstDayIndex = date.getDay();
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const prevMonthLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  for (let i = 1; i <= lastDay; i++) {
    daysArr.push(i);
  }
  for (let j = firstDayIndex; j > 0; j--) {
    prevDaysArr.push(prevMonthLastDay - j + 1);
  }
  const nextDays = 7 - lastDayIndex - 1;
  for (let k = 1; k <= nextDays; k++) {
    nextDaysArr.push(k);
  }
  const currDate = new Date().getDate();
  const currMonth = new Date().getMonth();

  return (
    <>
      <SelectedDate onClick={() => {setIsHidden(false)}} >
        <p>{format(new Date(), "d MMMM yyy")}</p>
        <img src={datepicker} alt={datepicker} />
      </SelectedDate>
      {
        isHidden ? null :

      <DatePickerContainer onClick={() => {setIsHidden(true)}} onMouseLeave={() => {setIsHidden(true)}}>
        <DatePickerBody>
          <Month>
            <MonthName>{months[month]}</MonthName>
          </Month>
          <Weekdays>
            {weekdays.map((weekday) => (
              <li>{weekday}</li>
            ))}
          </Weekdays>
          <Days>
            {prevDaysArr.map((prevDay) => (
              <PrevDay>{prevDay}</PrevDay>
            ))}
            {daysArr.map((day) =>
              day === currDate && month === currMonth ? (
                <Today>{day}</Today>
              ) : (
                <Day>{day}</Day>
              )
            )}
            {nextDaysArr.map((nextDay) => (
              <NextDay>{nextDay}</NextDay>
            ))}
          </Days>
          <DateStatesInfo>
            <DateStateBox>
              <DateState /> Done
            </DateStateBox>
            <DateStateBox>
              <DateStateProgress /> In Progress
            </DateStateBox>
            <DateStateBox>
              <DateStateMissed /> Missed
            </DateStateBox>
          </DateStatesInfo>
        </DatePickerBody>
      </DatePickerContainer>
      }
    </>
  );
};

export default DatePicker;
