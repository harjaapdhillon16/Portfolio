import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #262626;
  p {
    color: white;
    font-size: 1.4rem;
    strong {
      color: white;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter className='footer'>
      <div className='content has-text-centered'>
        <p>
          <span className='icon is-size-3'>
            <i className='fas fa-location-arrow' />
          </span>
          <strong>INDIA</strong>
        </p>
        <p>
          EMAIL : <strong>harjaapdhillon.hrizn@gmail.com</strong>
        </p>
      </div>
    </StyledFooter>
  );
};
export default Footer;
