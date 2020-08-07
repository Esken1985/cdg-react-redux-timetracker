import React, { useState } from "react";
import styled from "styled-components";

const IssuesSortingLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IssuesSortingLink = styled.div`
  &.inactive {
    font-weight: 500;
    font-size: 18px;
    line-height: 144.2%;
    color: #bbbbbb;
    cursor: pointer;
  }
  &.active {
    font-weight: 500;
    font-size: 18px;
    max-width: 104px;
    padding: 0px 28px;
    height: 47px;
    background-color: #f0f3f5;
    color: #4f4f4f;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:first-child {
    margin-right: 21px;
  }
`;

const IssuesSortingLinks = () => {
  const [linkState, setState] = useState({
    activeLink: null,
    links: [
      { id: 1, text: "All" },
      { id: 2, text: "Favorites" },
    ],
  });

  function toggleActive(index) {
    setState({ ...linkState, activeLink: linkState.links[index] });
  }
  function toggleActiveClass(index) {
    if(linkState.links[index] === linkState.activeLink){
      return "active";
    }else{
      return "inactive"
    }
  }

  return (
    <IssuesSortingLinksContainer>
      {linkState.links.map((link, index) => (
        <IssuesSortingLink
          key={index}
          className={toggleActiveClass(index)}
          onClick={() => {
            toggleActive(index);
          }}
        >
          {link.text}
        </IssuesSortingLink>
      ))}
    </IssuesSortingLinksContainer>
  );
};

export default IssuesSortingLinks;
