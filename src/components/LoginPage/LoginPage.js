import React from 'react'
import LoginForm from './LoginForm'
import {LoginFormContainer} from './FormikControl/formikStyles'


const LoginPage = () => {
    return (
        <LoginFormContainer>
           <LoginForm /> 
        </LoginFormContainer>
    )
}

export default LoginPage
