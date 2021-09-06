import React from 'react';
import styled from 'styled-components';
import Gun from './Gun';

const StyledBase = styled.div`
  display: flex;
  justify-content: center;
`;

const Base = ({ direction }) => {
  return (
    <div>
      <Gun direction={direction} />
    </div>
  );
};

export default Base;
