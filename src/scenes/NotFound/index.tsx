import React from 'react';

import styled from 'styled-components';

const NotFoundContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundWrapper = styled.div`
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: var(--text-xxxl);
  margin: 0;
  margin-bottom: 1rem;
`;

const NotFoundCaption = styled.h2`
  color: var(--colour-darkGrey);
  font-size: inherit;
  font-family: var(--font-secondary);
`;

function NotFound() {
  return (
    <NotFoundContainer className="container">
      <NotFoundWrapper>
        <NotFoundTitle>Oops!</NotFoundTitle>
        <NotFoundCaption>
          We're sorry, but the page you're looking for got lost in the Lilac
          field.
        </NotFoundCaption>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
}

export default NotFound;
