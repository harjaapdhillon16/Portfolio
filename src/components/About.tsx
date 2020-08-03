import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: -2rem;
  .card {
    margin: 10px;
    border-radius: 8px;
    background-color: #0d0d0d !important;
  }
  .is-5 {
    line-height: 1.7rem;
    font-weight: 400;
  }
  .card2 {
    background-color: #000;
    margin: 0.2rem;
    display:inline-block;
    padding:1rem;
    padding-bottom:1.5rem;
    border-radius: 20px;
  }
`;
const Data = [
  "React JS",
  "React Native",
  "Javascript",
  "Redux",
  "HTML5",
  "CSS3",
  "Node Js",
  "Firebase",
];

const About = () => {
  return (
    <Container>
      <section className='section'>
        <div className='columns is-centered'>
          <div className='column is-4 card'>
            <h1 className='title is-3 has-text-white'>About me</h1>
            <h1 className='title is-5 has-text-white'>
              It's been 2 years since I wrote my first program and while doing I
              have realized a lot of things about myself , but most importantly
              I have realized that I have a solid work ethic that has allowed me
              to gain in-depth knowledge in React , Javascript and Node and I
              have an attitude of whatever it takes to get the work done!
            </h1>
          </div>
          <div className='column is-4 card'>
            <h1 className='title is-3 has-text-white'>My Tech Stacks</h1>
            <div className='columns is-multiline'>
              <div className='column is-12'>
                  {Data.map((item) => (
                    <h1 className='card2 title is-5 has-text-weight-bold'>{item}</h1>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
