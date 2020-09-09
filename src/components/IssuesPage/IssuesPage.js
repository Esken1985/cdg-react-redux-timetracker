import React from "react";
import { Container } from "../../styled/styled";
import { IssuesPageGrid } from "../../styled/styled";
import IssuesSection from "./IssuesSection/IssuesSection";
import Aside from "../Aside/Aside";

const IssuesPage = () => {
  return (
    <Container>
      <IssuesPageGrid>
        <IssuesSection />
        <Aside />
      </IssuesPageGrid>
    </Container>
  );
};

export default IssuesPage;
