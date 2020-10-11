import React from 'react'
import {Label} from './formikStyles'
import styled from 'styled-components'
import TextError from './TextError'
import {Field, ErrorMessage} from 'formik'

const StyledField = styled(Field)`
    width: 250px;
    height: 30px;
    border-radius: 7px;
    padding: 10px;
    &:focus{
    box-shadow:0px 0px 16px rgba(55, 68, 189, 0.51);
    }
`;
export const FormInput = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-direction: column;
`

const Input = (props) => {
    const { label, name, ...rest } = props
    return (
        <FormInput>
            <Label htmlFor={name} >{label}</Label>
            <StyledField id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </FormInput>
    )
}

export default Input
