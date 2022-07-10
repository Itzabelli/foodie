import React from 'react';
import styled from 'styled-components';
import Contenido from './Components/Contenido';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Test from './Components/Test';

const App = (props) => {
  return (
    <div className={props.className}>
      <div>
        <Header />
        <Contenido />
        <Footer />
        {/* <Test /> */}
      </div>
    </div>
  );
};

export default styled(App)``;
