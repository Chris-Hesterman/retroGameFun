import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledAlien = styled.span.attrs((props) => ({
  id: props.id,
  visibility: props.status ? 'visible' : 'hidden'
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'invaders';
  color: peachpuff;
  font-size: 2.2rem;
  padding: 0;
  width: 2.65rem;
  height: 2.65rem;
  margin: 0 0.3rem;
  visibility: ${(props) => (props.status ? 'visible' : 'hidden')};
  animation: walk 0.5s linear infinite;
  @keyframes walk {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`;

const AlienShip = forwardRef(({ status, id, type }, ref) => {
  console.log('ship render');
  return (
    <StyledAlien id={id} status={status} ref={ref}>
      {type}
    </StyledAlien>
  );
});

export default AlienShip;
