import React from 'react';
import { StyledBase } from './BaseStyles.js';
import Gun from '../Gun/Gun';

const Base = ({ shotSound }) => {
  return (
    <StyledBase>
      <Gun />
    </StyledBase>
  );
};

export default Base;
