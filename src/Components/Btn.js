import React from 'react';
import styled from 'styled-components';

const Btn = (props) => {
  return (
    <div className={props.className}>
      <div className="boton">
        <h3>JOIN THE COMMUNITY</h3>
      </div>
    </div>
  );
};

export default styled(Btn)`
  padding: 0.5rem;
  width: 50%;
  background-color: #bd883c;
  border-radius: 50px;
  color: white;
  margin: 0 auto;

  :hover {
    background-color: #775524;
  }
`;
