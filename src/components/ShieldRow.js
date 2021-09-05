import React from 'react';
import Shield from './Shield';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
`;

const ShieldRow = () => {
  return (
    <StyledRow>
      <Shield />
      <Shield />
      <Shield />
    </StyledRow>
  );
};

export default ShieldRow;
