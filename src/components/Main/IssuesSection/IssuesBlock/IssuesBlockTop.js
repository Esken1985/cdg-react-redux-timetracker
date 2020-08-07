import React from 'react'
import styled from 'styled-components'
import dwnldbtn from '../../../../assets/dwnldbtn.svg'

const IssuesBlockTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 19px;
    padding-top: 47px;
    border-bottom: 1px solid #E9ECF2;
`
const Date = styled.p`
    font-size: 24px;
    padding-left: 19px;
`
const Day = styled.span`
    color: #1E1E1E;
    font-weight: bold;
`
const TotalProgress = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 34px;
`
const DownloadBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    background-color: #E9ECF2;
    border-radius: 50%;
    transition: .2s;
    &:hover{
        background-color: #62D2B1;
    }
`
const TotalHours = styled.div`
    margin-right: 47px;
& p{
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: #BBBBBB;
    padding-bottom: 8px;
}
& progress{
    width: 100px;
    height: 6px;
    border-radius: 4px;
}
    
`

const IssuesBlockTop = () => {
    return (
        <IssuesBlockTopContainer>
            <Date><Day>Wed,</Day> June 10</Date>
            <TotalProgress>
                <TotalHours>
                    <p>06:50:00</p>
                    <progress></progress>
                </TotalHours>
                <DownloadBtn><img src={dwnldbtn} alt="download" /></DownloadBtn>
            </TotalProgress>
        </IssuesBlockTopContainer>
    )
}

export default IssuesBlockTop
