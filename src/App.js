import { useState, useRef, useEffect } from 'react';
import { initialState } from './utils/initialState';
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

const App = () => {
  const [fleetStatus, setFleetStatus] = useState(initialState);
  const position = useRef(20);
  const height = useRef(100);
  const fleetRef = useRef(null);
  const shipRef = useRef(null);
  const shipTypes = {
    e: 'q',
    q: 'e',
    b: 'c',
    c: 'b',
    f: 'g',
    g: 'f'
  };
  let speed = 20;
  let interval = 1000;

  const moveFleet = () => {
    let newHeight;
    const ships = fleetRef.current.childNodes;

    if (position.current > 580) {
      speed = -speed;
      interval -= 75;
      newHeight = height.current + 25;
      height.current = newHeight;
      fleetRef.current.style.top = `${newHeight}px`;
    }
    if (position.current < 20) {
      speed = -speed;
      interval -= 75;
      newHeight = height.current + 25;
      height.current = newHeight;
      fleetRef.current.style.top = `${newHeight}px`;
    }

    const newposition = position.current + speed;

    fleetRef.current.style.left = `${newposition}px`;
    position.current = newposition;

    for (let ship of ships) {
      ship.textContent = shipTypes[ship.textContent];
    }

    setTimeout(() => {
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

  useEffect(() => {
    fleetRef.current.style.left = '20px';
    fleetRef.current.style.top = '100px';
    startInvasion();
  }, []);
  return (
    <StyledApp className="App">
      {console.log('rendering App')}
      <GlobalStyle />
      <StyledTitle>Spayed Invaders</StyledTitle>
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
