import React from 'react';
import styled from 'styled-components';
import Btn2 from './Btn2';
import Imagen from '../Images/seccion3.jpg';
import { AiFillStar } from 'react-icons/ai';

const Seccion3 = (props) => {
  return (
    <div className={props.className}>
      <div id="seccion3">
        <div className="contenido">
          <div className="titulos">
            <h4> Don't get left out.</h4>
            <h2>Your friends have already signed up.</h2>
          </div>
          <div className="boxes">
            <div className="box1">
              <div className="icon">
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                <AiFillStar />
              </div>
              <br />
              <p>
                “I use their weekly newsletter to find out what's going on in my
                neighborhood. I love that they only email once a week, and I
                actually look forward to laughing at the GIFs and jokes they
                use!.”
                <br />
                <br />
                <span> JACK SCOTCH </span>
              </p>
            </div>
            <div className="box2">
              <div className="icon">
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                <AiFillStar />
              </div>
              <br />
              <p>
                “They sent out an email with the recipe for their famous, secret
                apple cruller donuts. Now I can make this seasonal dessert for
                my family (on the rare occasion we aren't eating at their
                restaurant).”
                <br />
                <br />
                <span> JANE RASPBURRY</span>
              </p>
            </div>
          </div>
          <div className="btn">
            <Btn2 />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Seccion3)`
  #seccion3 {
    height: 800px;
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Imagen}); */
    background-image: url(${Imagen});
    background-size: cover;
    background-position: center center;
    position: relative;
  }

  #seccion3:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .icon {
    color: #cd8d33;
    font-size: 1.5rem;
  }

  #seccion3 .contenido {
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    position: relative;
  }

  .boxes {
    line-height: 1.8rem;
    display: flex;
    flex-direction: row;
  }
  .box1,
  .box2 {
    padding: 3rem;
    font-size: 1.3rem;
    color: #837f7f;
    margin: 4rem 2rem;
    font-family: times;
    background-color: white;
    line-height: 2rem;
  }
  span {
    font-size: 1.1rem;
  }
  h4,
  h2 {
    margin: 1rem;
    text-align: center;
  }
  @media (max-width: 900px) {
    #seccion3 {
      height: 1350px;
    }

    .boxes {
      flex-direction: column;
      margin: -2.5rem;
    }
    .box1 {
      margin-bottom: 2rem;
    }
    .box2 {
      margin-top: 0;
    }
    h2 {
      line-height: 3rem;
    }
    .btn {
      max-width: 400px;
      padding: 0;
      margin: 0;
    }
  }
`;
