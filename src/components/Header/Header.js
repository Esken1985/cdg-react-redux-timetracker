import React from "react";
import styled from "styled-components";
import { Container } from "../../styled/styled";
import HeaderNavbar from './HeaderNavbar';
import HeaderLinks from './HeaderLinks';

const HeaderWrapper = styled.div`
  background-color: #3744bd;
  display: flex;
  justify-content: space-between;
`;
const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0px 23px 0px;
`;


function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderFlex>
            <HeaderLeft>
                <HeaderNavbar />
            </HeaderLeft>
            <HeaderRight>
                <HeaderLinks/>
            </HeaderRight>
        </HeaderFlex>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;