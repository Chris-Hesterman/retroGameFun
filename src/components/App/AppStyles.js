import styled from 'styled-components';
import space from '../../images/space.webp';

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: lime;
  background: black;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${space});

  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
`;

export const StyledTitle = styled.h1`
  color: black;
  word-spacing: 1rem;
  text-shadow: 2px 2px 2px lime, 0 2px 2px lime, 2px 0 2px lime, -2px 0 2px lime,
    -2px -2px 2px lime, 0 -2px 2px lime;
`;

export const StyledButton = styled.button`
  margin-top: 10vh;
  color: lime;
  font-size: 2.5rem;
  font-weight: bold;
  background: black;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid lime;
  border-radius: 10px;
  height: 4rem;
  width: 10rem;
  box-shadow: 2px 2px 3px lime, -2px -2px 3px lime, -2px 2px 3px lime,
    2px -2px 3px lime;
  animation: throb 2s ease-in-out infinite;
  transition: all 1s ease-out;
  &:hover {
    cursor: pointer;
  }
  @keyframes throb {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }
`;
