import React from "react";
import styled from "styled-components";


import HomeHero from "./components/HomeHero.js";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";

const Container = styled.div`
  background-color: black;
  min-height: 100vh;
  width:100% !important;
  .title {
    color: white;
    padding-bottom: 1rem;
  }
  overflow-x:hidden;
`;

const App = () => {

  return (
    <Container className='has-text-centered'>
      <HomeHero />
      <About />
      <Project />
      <Footer />
    </Container>
  );
};
export default App;
