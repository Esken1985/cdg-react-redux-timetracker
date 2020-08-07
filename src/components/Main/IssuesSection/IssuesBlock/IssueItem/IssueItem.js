import React from 'react'
import styled from 'styled-components'
import playbtn from '../../../../../assets/playbtn.svg'
import stopbtn from '../../../../../assets/stopbtn.svg'
import dots from '../../../../../assets/verticaldots.svg'
import IssueProgressBar from './IssueProgressBar'

const IssueContainer = styled.div`
    width: 100%;
    max-width: 1157px;
    display: flex;
    justify-content: space-between;
    padding: 5px 0px 7px 0px;
    border-bottom: 1px dashed #E9ECF2;
    position: relative;
    transition: .2s;
    &:hover{
        background: #FFFFFF;
        box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
        border-radius: 10px;
        &:after{
            content: url(../../../assets/verticaldots.svg);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            width: 38px;
            height: 90px;
            border: 1px solid #E9ECF2;
            background-color: #3744BD;
            border-radius: 0px 10px 10px 0px;
            position: absolute;
            z-index: 2;
            right: -30px;
            bottom: -1px;
            opacity: 0;
            cursor: pointer;
        }
        &:hover:after{
            opacity: 1;
        }
    }
`
const IssueInfo = styled.div`
    display: flex;
    width: 570px;
`
const IssueStateLine = styled.div`
        width: 3px;
        height: 76px;
        background-color: #E34040;
        border-radius: 1px;
`
const IssueTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 28px;  
    max-width: 185px;
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    & span{
        color: #BBBBBB;
    }
    & p{
        color: #1E1E1E;
    }
`
const IssueTitle = styled.div`
    padding: 13px 131px 17px 27px;
    min-width: 200px;
    & p{
        font-size: 18px;
        color: #828282;
    }
    & h3{
        font-weight: 500;
        font-size: 20px;
        color: #1E1E1E;
    }
`
const IssueProgress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 31px;
`
const IssueRunTime = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #BBBBBB;
    margin-right: 36px;
`
const IssueButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    background-color: #F0F3F5;
    border-radius: 50%;
`

const IssueItem = () => {
    return (
        <IssueContainer>
            <IssueInfo>
                <IssueTime>
                    <p>09:00 </p><span> - 10:00</span>
                </IssueTime>
                <IssueStateLine></IssueStateLine>
                <IssueTitle>
                    <p>JRM-310</p>
                    <h3>Team standup</h3>
                </IssueTitle>
            </IssueInfo>
            <IssueProgress>
                <IssueProgressBar/>
                <IssueRunTime>01:00:00</IssueRunTime>
                <IssueButton><img src={playbtn} alt="play" /></IssueButton>
            </IssueProgress>
        </IssueContainer>
    )
}

export default IssueItem
