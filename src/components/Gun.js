import { useState } from 'react';
import styled from 'styled-components';

const StyledGunWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 85%;
  left: ${(props) => props.position};
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

const Gun = ({ direction }) => {
  const [center, setCenter] = useState(50);
  const [position, setPosition] = useState(`calc(${center}vw - 40px)`);

  return (
    <StyledGunWrapper position={position} direction={direction}>
      <StyledGun />
      <StyledGunBase />
    </StyledGunWrapper>
  );
};

export default Gun;
