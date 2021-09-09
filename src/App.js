import { useState, useRef, useEffect } from 'react';
import { initialState } from './utils/initialState';
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
  background-image: url(${space});
  background-size: cover;
  background-position: center;
  height: 100vh;
  overflow: hidden;
`;

const App = () => {
  const [fleetStatus, setFleetStatus] = useState(initialState);
  const position = useRef(30);
  const height = useRef(100);
  const fleetRef = useRef(null);
  let requestId;
  let speed = 20;
  let interval = 500;

  const moveFleet = () => {
    let newHeight;
    // console.log('height', height);
    if (position.current > 530) {
      speed = -speed;
      interval -= 75;
      console.log(speed);
      newHeight = height.current + 50;
      height.current = newHeight;
      fleetRef.current.style.top = `${newHeight}px`;
    }
    if (position.current < 30) {
      speed = -speed;
      interval -= 75;
      newHeight = height.current + 50;
      height.current = newHeight;
      fleetRef.current.style.top = `${newHeight}px`;
    }

    const newposition = position.current + speed;

    fleetRef.current.style.left = `${newposition}px`;
    position.current = newposition;

    setTimeout(() => {
      window.requestAnimationFrame(moveFleet);
    }, interval);
  };

  const startInvasion = (fps) => {
    requestId = window.requestAnimationFrame(moveFleet);
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
      <h1>Spayed Invaders</h1>
      <Fleet
        ref={fleetRef}
        fleet={fleetStatus.fleet}
        changeStatus={changeStatus}
      />
      <ShieldRow />
      <Base />
    </StyledApp>
  );
};

export default App;
