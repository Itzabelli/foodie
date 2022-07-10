import React from 'react';
import styled from 'styled-components';
import Imagecontenido from '../Images/producto4.png';

const Seccion1 = (props) => {
  return (
    <div className={props.className}>
      <div className="seccion1">
        <div className="contentimage">
          <img className="imagen" src={Imagecontenido} alt="postre" />
        </div>
        <div className="texto1">
          <h4>Order in </h4>
          <h3>Let us do the cooking for you. </h3>
          <p>
            At our restaurant, we believe in the power of good food, great
            conversation, and amazing friends. Our goal is to gather you and
            your loved ones around the table for a mouthwatering experience
            you'll never forget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default styled(Seccion1)`
  .seccion1 {
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
    margin-top: 2rem;
    position: relative;
  }

  .imagen {
    padding: 2rem 0;
    width: 100%;
  }

  .texto1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    text-align: left;
    color: #494646;
    font-size: 1.2rem;
    line-height: 2rem;
  }
  h3 {
    font-size: 2rem;
    color: #494646;
    font-family: times;
  }
  @media (max-width: 800px) {
    margin: 3rem 0;
    .seccion1 {
      flex-direction: column;
    }
    .texto1 {
      height: 700px;
      padding-top: 1rem;
      padding-left: 2.5rem;
      transform: translate(-4%, 15%);
    }
    .contentimage {
      position: absolute;
      transform: translate(0%, -15%);
    }
    .imagen {
      padding: 0;
      max-width: 600px;
    }
  }
`;
