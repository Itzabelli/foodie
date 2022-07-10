import React from 'react';
import styled from 'styled-components';

//Lista de elementos

const EqualDivider = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  background: papayawhip;
  ${(props) => props.vertical && 'flex-direction: column;'}

  > * {
    flex: 1;

    &:not(:first-child) {
      ${(props) => (props.vertical ? 'margin-top' : 'margin-left')}: 1rem;
    }
  }
`;

const Child = styled.div`
  padding: 0.25rem 0.5rem;
  background: palevioletred;
`;

const Test = () => {
  return (
    <div>
      <EqualDivider>
        <Child>First</Child>
        <Child>Second</Child>
        <Child>Third</Child>
      </EqualDivider>
      <EqualDivider vertical>
        <Child>First</Child>
        <Child>Second</Child>
        <Child>Third</Child>
      </EqualDivider>
    </div>
  );
};

//Animacion pendiente por probar:

// const animation = keyframes`
//   0% {
//     opacity: 0;
//   }

//   100 {
//     opacity: 1;
//   }
// `

// const animationRule = css`
//   ${animation} 1s infinite alternate;
// `

// const Component = styled.div`
//   animation: ${animationRule};
// `
// const Test = () => {

//      return (
//        <div>
// <animation>
//   <animationRule> Hola</animationRule>
// </animation>

// </div>

//Asignaar color a un texto

// const StyledSpan = styled.span`
//   color: blue;
// `;
// const Test = () => {
//   return <StyledSpan>Test</StyledSpan>;
// };

export default Test;
