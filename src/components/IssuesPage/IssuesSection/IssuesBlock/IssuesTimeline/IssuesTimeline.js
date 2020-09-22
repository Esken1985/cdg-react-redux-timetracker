import React from "react";
import styled from "styled-components";

const TimeScale = styled.div`
  width: 100%;
  max-width: 1157px;
  height: 23px;
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
  border-radius: 10px;
  margin-top: 45px;
`;
const TimeMarkersContainer = styled.div`
  padding: 14px 0 88px 0;
`;
const TimeMarker = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #c4cacb;
  margin-right: 18px;
  padding-left: 36px;
`;

const IssuesTimeline = ({addIssueToTimeline}) => {
  return (
    <>
      <TimeScale/>
      <TimeMarkersContainer>
        <TimeMarker>7:00</TimeMarker>
        <TimeMarker>8:00</TimeMarker>
        <TimeMarker>9:00</TimeMarker>
        <TimeMarker>10:00</TimeMarker>
        <TimeMarker>11:00</TimeMarker>
        <TimeMarker>12:00</TimeMarker>
        <TimeMarker>13:00</TimeMarker>
        <TimeMarker>14:00</TimeMarker>
        <TimeMarker>15:00</TimeMarker>
        <TimeMarker>16:00</TimeMarker>
        <TimeMarker>17:00</TimeMarker>
        <TimeMarker>18:00</TimeMarker>
        <TimeMarker>19:00</TimeMarker>
      </TimeMarkersContainer>
    </>
  );
};

export default IssuesTimeline;
