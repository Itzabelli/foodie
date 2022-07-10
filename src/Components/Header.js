import React from 'react';
import styled from 'styled-components';
// import Btn from './Btn';
// import Btn2 from './Btn2';

import Fondo from '../Images/header.jpg';
import Btn2Alert from './Btn2-alert';

const Header = (props) => {
  return (
    <div className={props.className}>
      <div className="content">
        <div className="logo">
          <h1> Foddie</h1>
        </div>
        <br />

        <div className="boxtext">
          <h2>Are you feeding your inner foodie?</h2>
          <p>
            Satisfy your hunger with delicious recipes, cooking hacks, and
            restaurant news delivered straight from our kitchen to yours.
          </p>
          <Btn2Alert className="btn" />
          {/* <Btn2 className="btn" /> */}
        </div>

        {/* <Btn /> */}
      </div>
    </div>
  );
};

export default styled(Header)`
  height: 550px;
  //Imagen de fondo oscura
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${Fondo});
  background-position: center center;
  background-size: cover;
  color: white;
  text-align: center;

  .content {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-around;
    height: 100%;
    //Si se emplea la propiedad de opacidad el texto que superpone la imagen también se aclara//
    /* background-color: black;
    opacity: 70%; */
  }
  .boxtext {
    margin-bottom: 7rem;
  }
  .logo {
    height: 20%;
    margin-top: 1.5rem;
    font-family: cursive;
    font-size: 1rem;
    text-decoration: overline;
  }
  p {
    line-height: 2rem;
    font-family: Arial;
    font-size: 1.5rem;
    padding: 1rem 20rem 3rem 20rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 900px) {
    .logo {
      margin-top: 2rem;
    }
    p {
      padding: 2rem 5rem;
    }
    .btn {
      width: 40%;
    }
  }

  @media (max-width: 600px) {
    .logo {
      margin-top: 1rem;
    }
    p {
      padding: 2rem;
    }
    .boxtext {
      margin-bottom: 2rem;
    }
    .btn {
      width: 40%;
    }
  }
`;
