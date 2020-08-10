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
        background-color: ${props => props.value < 100 ? '#FFCC40' : '#62D2B1'};
        border-radius: 6px;
    }
    &::-moz-progress-bar {
        height: 2px;
        background-color: #F0F3F5;
        border-radius: 6px;
  }
`

const IssueProgressBar = () => {
    return (
        <Container>
            <ProgressBar value="0" max="100"></ProgressBar>
        </Container>
    )
}

export default IssueProgressBar
