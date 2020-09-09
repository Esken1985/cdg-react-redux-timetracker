import React from "react";
import styled from "styled-components";
import { Container } from "../../styled/styled";

const FooterWrapper = styled.div`
  background-color: #3744bd;
  margin-top: auto;
`;
const Content = styled.div`
  color: #ffffff;
  padding: 20px 0px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Content>All rights reserved </Content>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
