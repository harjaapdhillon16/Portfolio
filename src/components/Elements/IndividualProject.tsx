import React from "react";
import styled from "styled-components";

const Container = styled.div`
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-radius: 20px;
    z-index: -1;
    transition: 0.3s;
    @media screen and (max-width: 1200px) {
      filter: brightness(0.5);
    }
  }
  .upperDiv {
    position: relative;
    transform: translateY(-20vh);
    text-align: center;
    @media screen and (min-width: 1200px) {
      opacity: 0;
      transition: 0.5s;
    }
  }
  .pull {
    margin-bottom: -2rem;
  }
  :hover {
    .upperDiv {
      opacity: 1;
    }
    .button {
      background-color: #ffffff !important;
      color: #ee1d52 !important;
    }
    img {
      filter: brightness(0.5);
    }
  }
  button {
    transform: translateY(-14vh);
    font-weight: bold;
    padding: 0rem 3rem;
    background-color: #ee1d52 !important;
    transition: 0.5s;
    max-width: 22rem;
  }
  margin-bottom: -15vh;
`;

interface Props {
  image: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  link?: string;
  pull?: boolean;
}

const IndividualProject = (props: Props) => {
  return (
    <Container className='' >
      <img alt='phone' src={props.image} />
      <div className='upperDiv'>
        <div className='columns has-text-centered is-centered is-multiline'>
          <div className='column pull is-10'>
            <h1 className='title is-2 has-text-weight-bold'>{props.title}</h1>
          </div>
          <div className='column is-10'>
            <h1 className='title is-4'>{props.subtitle}</h1>
          </div>
        </div>
      </div>
      <a href={props.link || ""} target='_blank' rel='noopener noreferrer'>
        <button className='button is-primary is-medium'>
          {props.buttonText}
        </button>
      </a>
    </Container>
  );
};

export default IndividualProject;
