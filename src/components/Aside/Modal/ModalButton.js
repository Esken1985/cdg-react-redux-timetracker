import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 45px;
    height: 45px;
    background-color: #F9FAFC;
    border-radius: 50%;
    align-items: center;
        &:first-child{
            margin-right: 27px;
        }
        &:hover{
            background: #FFFFFF;
            box-shadow: 0px 7px 15px rgba(148, 156, 160, 0.13);
        }
`;

const ModalButton = (props) => {
    return (
        <Button onClick={props.close} type={props.type}>
            {props.children}
        </Button>
    )
}

export default ModalButton
