import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import FormikContainer from "./FormikControl/FormikContainer";

const LoginForm = ({history, setAuthData}) => {
  return (
    <FormikContainer history={history} setAuthData={setAuthData}/>
  )
};

export default LoginForm;
