import React from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Title = styled.h3`
    font-weight: bold;
    font-size: 24px;
    color: #1E1E1E;
    padding: 0px 0px 84px 38px;
`;
const DropdownDots = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px 0px 0px;
`;
const DropdownDot = styled.span`
    display: inline-block;
    border-radius: 50%;
    background-color: #C4CACB;
    width: 6px;
    height: 6px;
    margin-right: 4px; 
    &:last-child{
        margin-right: 0px;
    } 
`;


const AddNewWorklogTop = () => {
    return (
        <FlexWrapper>
            <Title>Time tracking</Title>
            <DropdownDots>
                <DropdownDot></DropdownDot>
                <DropdownDot></DropdownDot>
                <DropdownDot></DropdownDot>
            </DropdownDots>
        </FlexWrapper>
    )
}

export default AddNewWorklogTop
