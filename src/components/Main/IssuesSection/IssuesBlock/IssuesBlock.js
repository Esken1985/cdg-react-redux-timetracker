import React from 'react'
import styled from 'styled-components'
import IssuesBlockTop from './IssuesBlockTop'
import IssueItem from './IssueItem/IssueItem'

const IssuesBlockWrap = styled.div`
    width: 100%;
    max-width: 1159px;
`

const IssuesBlock = () => {
    return (
        <IssuesBlockWrap>
            <IssuesBlockTop />
            <IssueItem />
        </IssuesBlockWrap>
    )
}

export default IssuesBlock
