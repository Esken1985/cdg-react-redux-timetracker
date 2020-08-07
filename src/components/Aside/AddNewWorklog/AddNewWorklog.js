import React from 'react'
import styled from 'styled-components'
import AddNewWorklogTop from './AddNewWorklogTop';
import AddNewWorklogBtn from './AddNewWorklogBtn';


const BlockContainer = styled.div``;

const AddNewWorklog = () => {
    return (
        <BlockContainer>
            <AddNewWorklogTop/>
            <AddNewWorklogBtn/>
        </BlockContainer>
    )
}

export default AddNewWorklog;
