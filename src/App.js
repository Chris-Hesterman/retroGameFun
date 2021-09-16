import { useState, useRef } from 'react';
import { initialState } from './utils/initialState';
import { Howl } from 'howler';
import { GlobalStyle } from './GlobalStyle';
import Fleet from './components/Fleet';
import ShieldRow from './components/ShieldRow';
import Base from './components/Base';
import styled from 'styled-components';
import space from './images/space.jpg';

const StyledApp = styled.div`
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

const StyledTitle = styled.h1`
  color: black;
  text-shadow: 2px 2px 2px lime, 0 2px 2px lime, 2px 0 2px lime, -2px 0 2px lime,
    -2px -2px 2px lime, 0 -2px 2px lime;
`;

const StyledButton = styled.button`
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

const App = () => {
  const [fleetStatus, setFleetStatus] = useState(initialState);
  const [started, setStarted] = useState(false);
  const position = useRef(20);
  const height = useRef(100);
  const fleetRef = useRef(null);
  const shipRef = useRef(null);
  let soundIndex = 0;
  const soundPaths = [
    '../assets/7.mp3',
    '../assets/5.mp3',
    '../assets/6.mp3',
    '../assets/7.mp3'
  ];
  let soundArray = [7, 4, 5, 6];
  const shipTypes = {
    e: 'q',
    q: 'e',
    b: 'c',
    c: 'b',
    f: 'g',
    g: 'f'
  };
  let speed = 10;
  let interval = 500;

  const moveFleet = () => {
    let newHeight;
    soundArray[soundIndex].play();
    const ships = fleetRef.current.childNodes;
    let moveSideways = true;

    if (position.current > 580) {
      speed = -speed;
      interval -= 75;
      newHeight = height.current + 25;
      height.current = newHeight;
      fleetRef.current.style.top = `${newHeight}px`;
      moveSideways = false;
      position.current = 580;
    }
    if (position.current < 20) {
      speed = -speed;
      interval -= 75;
      newHeight = height.current + 25;
      height.current = newHeight;
      fleetRef.current.style.top = `${newHeight}px`;
      moveSideways = false;
      position.current = 20;
    }

    const newposition = moveSideways
      ? position.current + speed
      : position.current;

    fleetRef.current.style.left = `${newposition}px`;
    position.current = newposition;

    for (let ship of ships) {
      moveSideways = true;
      ship.textContent = shipTypes[ship.textContent];
    }

    setTimeout(() => {
      soundIndex++;
      if (soundIndex > 3) {
        soundIndex = 0;
      }
      window.requestAnimationFrame(moveFleet);
    }, interval);
  };

  const startInvasion = () => {
    window.requestAnimationFrame(moveFleet);
  };

  const changeStatus = (shipId) => {
    setFleetStatus((prevFleetStatus) => {
      prevFleetStatus.fleet[shipId] = 0;
      return { ...prevFleetStatus };
    });
  };

  const handleStart = (e) => {
    fleetRef.current.style.left = '20px';
    fleetRef.current.style.top = '100px';
    setStarted(true);
    soundArray = soundArray.map((sound, index) => {
      return new Howl({
        src: [soundPaths[index]],
        format: ['mp3'],
        html5: true
      });
    });
    setTimeout(() => {
      fleetRef.current.style.display = 'flex';
      startInvasion();
    }, 1500);
  };

  return (
    <StyledApp className="App">
      {console.log('rendering App')}
      <GlobalStyle />
      <StyledTitle>Spayed Invaders</StyledTitle>
      {!started && <StyledButton onClick={handleStart}>START</StyledButton>}
      <Fleet
        ref={fleetRef}
        fleet={fleetStatus.fleet}
        changeStatus={changeStatus}
        shipRef={shipRef}
      />
      <ShieldRow />
      <Base />
    </StyledApp>
  );
};

export default App;
