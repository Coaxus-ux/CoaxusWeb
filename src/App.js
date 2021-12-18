import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Projects from "./pages/Projects";
import Bio from "./pages/Bio";
import FindMe from "./pages/FindMe";

import AsideBar from './components/util/AsideBar';
import Header from "./components/util/Header";

import { FatherContainer, SonContainer } from './styles/Layout';

function App() {
  return (
    <FatherContainer>
      <Header />
      <SonContainer>
        <Router>
          <AsideBar />
              <Route exact path="/" component={Bio} />
              <Route path="/projects" component={Projects} />
              <Route path="/findme" component={FindMe} />
        </Router>
      </SonContainer>
    </FatherContainer>
  );
}

export default App;
