import React from "react";
import styled from "styled-components";

const Container = styled.div`
  span {
    color: white;
    background-color: black;
    padding: 1rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    transition: 0.5s;
  }
  margin-top: 2.8rem;
`;

const Icons = [
  {
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/harjaap-dhillon-2208b316a",
  },
  {
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/harjaapxdhillon/",
  },
  {
    icon: "fab fa-github-square",
    link: "https://github.com/harjaapdhillon16",
  },
];

const SocialIcons = () => {
  return (
    <Container className='columns is-centered'>
      <div className='column is-2'>
        {Icons.map((item) => (
          <a href={item.link} target='_blank' rel='noopener noreferrer'>
            <span className='icon is-size-2'>
              <i className={item.icon} />
            </span>
          </a>
        ))}
      </div>
    </Container>
  );
};

export default SocialIcons;
