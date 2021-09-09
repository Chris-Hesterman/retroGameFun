import React from 'react';
import styled from 'styled-components';
import Gun from './Gun';

const StyledBase = styled.div`
  position: absolute;
  top: 800px;
`;

const Base = ({ direction, speed }) => {
  return (
    <StyledBase>
      <Gun />
    </StyledBase>
  );
};

export default Base;
