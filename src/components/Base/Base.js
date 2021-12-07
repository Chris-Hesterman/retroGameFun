import React from 'react';
import { StyledBase } from './BaseStyles.js';
import Gun from '../Gun/Gun';

const Base = ({ shotSound, fleetLeft, fleetTop }) => {
  return (
    <StyledBase>
      <Gun fleetLeft={fleetLeft} fleetTop={fleetTop} />
    </StyledBase>
  );
};

export default Base;
