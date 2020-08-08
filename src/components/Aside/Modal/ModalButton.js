import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
    width: 45px;
    height: 45px;
    background-color: #F9FAFC;
    border-radius: 50%;
    display: flex;
    justify-content: center;
        &:first-child{
            margin-right: 27px;
        }
`;

const ModalButton = (props) => {
    return (
        <Button onClick={props.close}>
            {props.children}
        </Button>
    )
}

export default ModalButton
