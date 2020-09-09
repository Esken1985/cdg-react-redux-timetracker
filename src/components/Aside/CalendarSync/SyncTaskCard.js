import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  margin: 41px 0px 0px 38px;
`;
const CardItem = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 525px;
  height: 168px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #1e1e1e;
  background-color: #f3f5f7;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const TaskState = styled.div`
  position: relative;
  background: #75e1f9;
  border-radius: 1px;
  width: 3px;
  height: 76px;
  top: 46px;
`;
const TaskTitle = styled.h2`
  padding: 28px 0px 11px 40px;
`;
const TaskTime = styled.p`
  padding: 0px 0px 0px 40px;
`;

const SyncTaskCard = () => {
  return (
    <CardsContainer>
      <CardItem>
        <TaskState></TaskState>
        <div>
          <TaskTitle>Logo redesign</TaskTitle>
          <TaskTime>09:00 - 10:00</TaskTime>
        </div>
      </CardItem>
    </CardsContainer>
  );
};

export default SyncTaskCard;
