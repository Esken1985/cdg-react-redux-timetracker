import React, { useState } from "react";
import styled from "styled-components";
import Issue from "./Issue";

const IssueAccordionHeader = styled.div`

`;
const IssueAccordionItem = styled.div`
  opacity: 0;
  max-height: 0;
  overflow-y: hidden;
  transition: all 0.4s ease;
`;


function IssuesGroupList(props) {
  const [items, setItems] = useState({open: false})
  const toggleItem = index => {  
      setItems(items.map((item, i) => {
        if (i === index) {
          item.open = !item.open
        } else {
          item.open = false;
        }
        return item;
      }))
    }
  return (
    <IssueAccordionHeader>
      {props.children}
      <IssueAccordionItem>{props.children}</IssueAccordionItem>
    </IssueAccordionHeader>
  );
}
export default IssuesGroupList;
