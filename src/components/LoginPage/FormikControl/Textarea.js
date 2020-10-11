import React from 'react'
import {Label} from './formikStyles'
import TextError from './TextError'
import {Field, ErrorMessage} from 'formik'


const Teaxtarea = (props) => {
    const { label, name, ...rest } = props
    return (
        <div>
            <Label htmlFor={name} >{label}</Label>
            <Field as={textarea} id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Teaxtarea