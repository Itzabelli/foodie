import React from 'react';
import styled from 'styled-components';
import logo from '../Images/logo.png';

const Footer = (props) => {
  return (
    <div className={props.className}>
      <div>
        <div className="contenedorlogo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <p> &copy; 2019 FOODIE CO. • PRIVACY POLICY • CONTACT </p>
      </div>
    </div>
  );
};

export default styled(Footer)`
  text-align: center;
  p {
    margin: 1rem 0;
  }
  .contenedorlogo {
    height: 100px;
  }
  .logo {
    margin-top: 1rem;
    height: 80%;
  }
`;
