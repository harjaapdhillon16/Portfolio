import React from "react";
import styled from "styled-components";

import IndividualProjects from "./Elements/IndividualProject";

import SoVerifiedImage from "../assets/Soverified.png";
import PortfolioImage from "../assets/portfolio.png";

const Container = styled.div`
  transform: translateY(-4vh);
`;

const Data = [
  {
    title: "Go-Vid",
    subtitle: "A short video app",
    image:
      "https://images.unsplash.com/photo-1533022139390-e31c488d69e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
    buttonText: "View the experience",
  },
  {
    title: "Soverified",
    subtitle: "Messaging service with twitter API",
    image: SoVerifiedImage,
    buttonText: "Visit the website",
  },
  {
    title: "Personal Portfolio",
    image: PortfolioImage,
    buttonText: "View Code",
  },
];

const Project = () => {
  return (
    <section className='section'>
      <Container className='columns is-centered is-multiline'>
        <div className='column is-12'>
          <h1 className='title is-1'>MY PROJECTS</h1>
        </div>
        {Data.map((item) => (
          <div className='column is-6'>
            <IndividualProjects {...item} />
          </div>
        ))}
      </Container>
    </section>
  );
};
export default Project;
