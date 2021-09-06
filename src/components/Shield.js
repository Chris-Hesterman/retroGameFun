import React from 'react';
import styled from 'styled-components';

const StyledShield = styled.div`
  display: flex;
  justify-content: center;
  height: 5rem;
  width: 8rem;
  background-color: lime;
  color: black;
  border-radius: 25% 25% 0 0;
`;

const Shield = () => {
  return (
    <StyledShield>
      <h1>Shield</h1>
    </StyledShield>
  );
};

export default Shield;
