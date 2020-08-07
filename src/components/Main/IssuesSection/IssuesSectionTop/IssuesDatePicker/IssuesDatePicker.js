import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './IssuesDatePicker.css';
import styled from 'styled-components'

// const DatePickerImg = styled.img`
//   position: absolute;
//   top: 23px;
//   right: 29px;
//   z-index: 2;
// `
const DatePickerWrap = styled.div`
 position: relative;
`

const IssuesDatePicker = () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
          <DatePickerWrap>
          <DatePicker selected={startDate} 
          onChange={date => setStartDate(date)} 
          dateFormat="d MMMM yyyy"/>
          {/* <DatePickerImg src={datepicker} alt="info" /> */}
          </DatePickerWrap>
        );
};

export default IssuesDatePicker;
