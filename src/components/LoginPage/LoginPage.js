import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import { LoginFormContainer } from "./FormikControl/formikStyles";
import { authContext } from "../../context/authContext";
import styled from "styled-components";

const Message = styled.button`
  cursor: pointer;
  padding: 75px 150px;
  border-radius: 50px;
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  background-color: #37bd;
  margin-top: 200px;
`;

const LoginPage = ({ history }) => {
  const { setAuthData, auth } = useContext(authContext);
  const onLogOut = () => {
    setAuthData(null);
  }; //clearing the context
  return (
    <LoginFormContainer>
      {auth.data === null ? (
        <LoginForm history={history} setAuthData={setAuthData} />
      ) : (
        <Message onClick={onLogOut}>Log Out</Message>
      )}
    </LoginFormContainer>
  );
};

export default LoginPage;
