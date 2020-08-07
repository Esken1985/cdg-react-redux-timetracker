import React from 'react'
import styled from 'styled-components'

const ProgressBar = styled.progress`
    width: 108px;
    height: 2px;
    background-color: #F0F3F5;
    margin-right: 50px;
    &::-webkit-progress-value{
        width: 106px;
        height: 4px;
        border-radius: 4px;
        background-color: #E34040;
        display: flex;
        align-items:center;
    }
`

const IssueProgressBar = () => {
    return (
        <div>
            <ProgressBar value="10" max="100"></ProgressBar>
        </div>
    )
}

export default IssueProgressBar
