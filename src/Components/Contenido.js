import React from 'react';
import styled from 'styled-components';

import Seccion1 from './Seccion1';
import Seccion2 from './Seccion2';
import Seccion3 from './Seccion3';

const Contenido = (props) => {
  return (
    <div className={props.className}>
      <div className="contenido">
        <Seccion1 />
        <Seccion2 />
        <Seccion3 />
      </div>
    </div>
  );
};

export default styled(Contenido)``;
