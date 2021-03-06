import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-bottom: 12px;
`;
const ProgressBar = styled.progress` 
    width: 108px;
    height: 2px;
    border-radius: 6px;
    background-color: #F0F3F5;
    margin-right: 50px;
    &::-webkit-progress-bar {
        height: 2px;
        background-color: #F0F3F5;
        border-radius: 6px;
        display: flex;
        align-items: center;
    }
    &::-webkit-progress-value {
        height: 4px;
        background-color: ${props => props.value === props.max ? '#62D2B1' : '#FFCC40' };
        border-radius: 6px;
    }
    &::-moz-progress-bar {
        height: 2px;
        background-color: #F0F3F5;
        border-radius: 6px;
  }
`

const IssueProgressBar = () => {
    const progressValue = 2
    const progressMaxValue = 2
   
    return (
        <Container>
            <ProgressBar value={progressValue} max={progressMaxValue}></ProgressBar>
        </Container>
    )
}

export default IssueProgressBar
