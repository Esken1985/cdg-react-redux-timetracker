import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { SubmitButton } from "./formikStyles";

const StyledForm = styled(Form)`
  width: 500px;
  height: 500px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 0px 16px rgba(0, 0, 74, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormElementsContainer = styled.div`
text-align: center;
`;

const FormikContainer = ({history, setAuthData}) => {
  
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  const handleSubmit = (values) => {
    setAuthData(values);
    history.replace('/');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <StyledForm>
            <FormElementsContainer>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              <SubmitButton type="submit" disabled={!formik.isValid}>
                Sign In
              </SubmitButton>
            </FormElementsContainer>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
