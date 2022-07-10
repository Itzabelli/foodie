import React from 'react';
import styled from 'styled-components';
import { VscActivateBreakpoints } from 'react-icons/vsc';

const Seccion2 = (props) => {
  return (
    <div className={props.className}>
      <div className="seccion2">
        <div>
          <div className="icon">
            <VscActivateBreakpoints />{' '}
          </div>
          <h4>Want our most delicious secrets? </h4>
          <h3>Sample exclusive content we only share in our newsletter.</h3>
        </div>
        <div className="boxtext">
          <div>
            <div className="titulo">
              <b> SCRUMPTIOUS RECIPES</b>
            </div>

            <p>
              Learn how to make some of our most famous, award-winning dishes
              and desserts from the comfort of your home.
            </p>
          </div>
          <div>
            <div className="titulo">
              <b> NUTRITIOUS NEWS</b>
            </div>

            <p>
              See what's going on at our multiple restaurant locations, and keep
              in touch with your local community.
            </p>
          </div>
          <div>
            <div className="titulo">
              <b> DELECTABLE DISCOUNTS</b>
            </div>

            <p>
              Get exclusive deals, coupons, and event invitations to treat
              yourself to a night out at your favorite restaurant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Seccion2)`
  font-family: Arial;
  color: #494646;
  text-align: center;
  font-size: 1.2rem;
  line-height: 2rem;
  height: 500px;
  display: flex;
  align-items: center;
  .seccion {
    max-height: 100%;
  }

  .titulo {
    margin-bottom: 1rem;
  }

  .boxtext {
    text-align: left;
    display: flex;
    padding: 2.5rem;
    gap: 5rem;
    margin-top: 2rem;
  }
  h3 {
    font-size: 2rem;
    color: #494646;
    font-family: times;
  }

  .icon {
    color: #cd8d33;
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    height: 900px;
    .boxtext {
      flex-direction: column;
      gap: 2rem;
      margin-top: 1rem;
    }
    h3 {
      padding: 0 2.5rem 0;
    }
  }
`;
