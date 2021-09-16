import styled from 'styled-components';

export const StyledShield = styled.div`
  display: flex;
  justify-content: center;
  height: 5rem;
  width: 8rem;
  background-image: repeating-linear-gradient(
    20deg,
    lime,
    lime 1px,
    transparent 1px,
    transparent 2px
  );
  border-radius: 25% 25% 0 0;
`;
