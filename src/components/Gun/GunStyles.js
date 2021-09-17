import styled from 'styled-components';

export const StyledGunWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: calc(50vw - 26px);
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

export const StyledShot = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: lime;
  position: absolute;
  left: calc(50vw + 100px);
  bottom: -20px;
  display: none;
`;
