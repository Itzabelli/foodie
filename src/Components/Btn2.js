import React from 'react';
import styled from 'styled-components';

const Botton = styled.h3`
  padding: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  width: 60%;
  background-color: #bd883c;
  border-radius: 50px;
  color: white;
  margin: 0 auto;
  text-align: center;

  :hover {
    background-color: #775524;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 1rem;
    height: 100%;
  }
`;

const Btn = (props) => {
  return (
    <div>
      <Botton>JOIN THE COMMUNITY</Botton>
    </div>
  );
};

export default styled(Btn)``;
