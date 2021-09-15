import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledAlien = styled.span`
  visibility: ${(props) => (props.status ? 'visible' : 'hidden')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: repeating-linear-gradient(
    20deg,
    lime,
    lime 1px,
    transparent 1px,
    transparent 2px
  );
  background-clip: text;
  -webkit-background-clip: text;
  font-family: 'invaders';
  color: transparent;
  font-size: 2.2rem;
  padding: 0;
  width: 2.65rem;
  height: 2.65rem;
  margin: 0 0.3rem;
  visibility: ${(props) => (props.status ? 'visible' : 'hidden')};
`;

const AlienShip = forwardRef(({ status, id, type }, ref) => {
  // console.log('ship render');
  return (
    <StyledAlien id={id} status={status} ref={ref}>
      {type}
    </StyledAlien>
  );
});

export default AlienShip;
