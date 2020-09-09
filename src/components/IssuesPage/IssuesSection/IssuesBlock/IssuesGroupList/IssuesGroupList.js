import React from 'react'
import styled from "styled-components"
import Issue from '../Issue/Issue';

const Accordion = styled.div``;
const AccordionHeader = styled.div``;
const AccordionBody = styled.div``;

const IssuesGroupList = () => {
    return (
        <Accordion>
            <AccordionHeader ><Issue/></AccordionHeader>
            <AccordionBody ></AccordionBody>
        </Accordion>
    )
}

export default IssuesGroupList
