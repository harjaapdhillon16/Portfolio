import React from "react";
import styled from "styled-components";
import TextLoop from "react-text-loop";

import Image from "../assets/harjaap.jpeg";
import SocialIcons from "./SocialIcons.tsx";

const Container = styled.div`
  /* The image used */
  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .backImage {
    z-index: -1;
    animation-name: example;
    animation-duration: 2s;
    padding: 2vh;
    animation-timing-function: ease-in;
    border-radius: 10vh;
    /* Full height */
    min-height: 100vh;

    /* Center and scale the image nicely */
    width: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }
  .columns {
    padding-top: 10vh;
  }
  .upperDiv {
    position: absolute;
    top: 0vh;
    width: 100%;
    padding: 4vh;
  }
  .title {
    margin-bottom:3rem;
    @media screen and (max-width:768px){
      font-size:1.5rem;
      margin-bottom:3rem;
    }
  }
`;

const HomeHero = () => {
  return (
    <Container>
      <img src={Image} alt='harjaap' className='backImage' />
      <div className='upperDiv'>
        <div className='columns is-vcentered is-centered is-multiline'>
          <div className='column is-10 has-text-left '>
            <h1 className='title is-1 has-text-weight-bold'>
              I am Harjaap Dhillon
            </h1>
          </div>
          <div className='column is-12 has-text-right '>
            <h1 className='title is-1 has-text-weight-bold'>
              Developing{" "}
              <TextLoop interval={800}>
                <span> Apps</span>
                <span> Websites</span>
                <span> backends</span>
              </TextLoop>
            </h1>
          </div>
          <div className='column is-12 has-text-left '>
            <h1 className='title is-1 has-text-weight-bold'>
              With{" "}
              <TextLoop interval={1500}>
                <span> React.JS</span>
                <span> React Native</span>
                <span> Node JS</span>
              </TextLoop>
            </h1>
          </div>
          <div className='column is-12 has-text-centered '>
            <SocialIcons />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeHero;
