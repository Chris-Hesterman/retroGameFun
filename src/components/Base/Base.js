import React from 'react';
import { StyledBase } from './BaseStyles.js';
import Gun from '../Gun/Gun';

const Base = () => {
  return (
    <StyledBase>
      {console.log('render base')}
      <Gun />
    </StyledBase>
  );
};

export default Base;
