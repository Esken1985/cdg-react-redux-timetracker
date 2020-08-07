import React from "react";
import Header from "./components/Header/Header";
import { AppWrapper, AppGrid, Container } from "./styled/styled";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Container>
      <AppGrid>
        <Main />
        <Aside />
      </AppGrid>
      </Container>
    </AppWrapper>
  );
}

export default App;
