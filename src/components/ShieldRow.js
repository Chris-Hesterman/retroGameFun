import React from 'react';
import Shield from './Shield';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: absolute;
  top: 500px;
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
