import React from 'react';

import styled from 'styled-components';

const AboutContainer = styled.div`
  & > div {
    margin-bottom: 5rem;
  }
  @media (min-width: 768px) {
    & > div {
      margin-bottom: 12rem;
    }
  }
`;

function About() {
  return (
    <AboutContainer className="container">
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
        architecto nesciunt veniam hic quod cum? Ducimus expedita ipsum minus
        ratione, laborum, iure cupiditate aliquid laudantium eos repellat,
        molestias maiores quis?
      </p>
    </AboutContainer>
  );
}

export default About;
