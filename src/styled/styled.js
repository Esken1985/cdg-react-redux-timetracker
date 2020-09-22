import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #E5E5E5;
  font-size: 100%;
  font-family: "Roboto", sans-serif;
  line-height: 1;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1787px;
  margin: 0 auto;
`;
export const IssuesPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1224px 563px;
  padding-top: 51px;
`;
export const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  padding-top: 500px;
`;
