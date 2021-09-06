import React from 'react';
import styled from 'styled-components';

const StyledGunWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledGun = styled.div`
  margin-bottom: 1rem;
  height: 0;
  width: 0;
  margin-bottom: 0;
  border-top: 15px solid transparent;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom: 15px solid lime;
`;

const StyledGunBase = styled.div`
  width: 5rem;
  height: 2.5rem;
  background-color: lime;
  margin-top: 0;
`;

const Gun = () => {
  return (
    <StyledGunWrapper>
      <StyledGun />
      <StyledGunBase />
    </StyledGunWrapper>
  );
};

export default Gun;
