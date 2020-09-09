import styled from "styled-components";

export const FormInput = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-direction: column;
`
export const Error = styled.div`
    color: red;
`;
export const SubmitButton = styled.button.attrs({ type: 'submit' })`
    padding: 10px 40px;
    border-radius: 50px;
    background-color: #ffffff;
    margin-top: 20px;
    font-size: 18px;
    color: #4f4f4f;
    &:hover{
        box-shadow:0px 0px 16px rgba(0, 0, 74, 0.51);
    }
`;
export const LoginFormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 158px 0px;
`;
export const Label = styled.label`
    font-size: 24px;
    font-weight: bold;
    padding: 6px 0px;
    
`;