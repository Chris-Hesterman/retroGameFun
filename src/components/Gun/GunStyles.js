import styled from 'styled-components';

export const StyledGunWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: calc(50vw - 40px);
  font-family: 'invaders';
  font-size: 5rem;
  color: transparent;
  background-image: repeating-linear-gradient(
    20deg,
    lime,
    lime 1px,
    transparent 1px,
    transparent 2px
  );
  background-clip: text;
  -webkit-background-clip: text;
`;
