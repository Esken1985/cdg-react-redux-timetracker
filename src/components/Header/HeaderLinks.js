import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import settings from "../../assets/settings.svg";
import info from "../../assets/info.svg";
import exit from "../../assets/exit.svg";
import avatar from "../../assets/avatar.jpg";

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  margin-right: 50px;
  &:last-child {
    margin-right: 0px;
  }
`;
const Image = styled.img`
  &.avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;

const HeaderLinks = () => {
  return (
    <LinksContainer>
      <StyledLink to="/">
        <Image src={settings} alt="settings" />
      </StyledLink>
      <StyledLink to="/">
        <Image src={info} alt="info" />
      </StyledLink>
      <StyledLink to="/">
        <Image src={exit} alt="exit" />
      </StyledLink>
      <StyledLink to="/">
        <Image src={avatar} alt="avatar" className="avatar" />
      </StyledLink>
    </LinksContainer>
  );
};

export default HeaderLinks;
