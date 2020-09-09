import React from 'react'
import {Error} from './formikStyles'
const TextError = (props) => {
    return (
        <Error>
            {props.children}
        </Error>
    )
}

export default TextError
