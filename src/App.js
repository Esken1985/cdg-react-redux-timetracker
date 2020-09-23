import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { AppWrapper, Container } from "./styled/styled";
import IssuesPage from "./components/IssuesPage/IssuesPage";
import HomePage from "./components/HomePage/HomePage";
import FilterPage from "./components/FilterPage/FilterPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Footer from "./components/Footer/Footer";
import AuthProvider from "./context/authContext";
// import PrivateRoute from './components/Route/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <AppWrapper>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/issues" component={IssuesPage} />
            <Route path="/filter" component={FilterPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Container>
        <Footer />
      </AppWrapper>
    </AuthProvider>
  );
}

export default App;
