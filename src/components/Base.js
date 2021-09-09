import React from 'react';
import styled from 'styled-components';
import Gun from './Gun';

const StyledBase = styled.div`
  width: 100%;
  position: absolute;
  top: 800px;
  left: 0;
`;

const Base = () => {
  return (
    <StyledBase>
      <Gun />
    </StyledBase>
  );
};

export default Base;
