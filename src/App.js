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
  justify-content: space-around;
  color: lime;
  background-image: url(${space});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const App = () => {
  const [fleetStatus, setFleetStatus] = useState(initialState);
  const posiRef = useRef(30);
  const fleetRef = useRef(null);
  let requestId;

  const moveFleet = () => {
    console.log('moving fleet', fleetRef);
    const newPosiRef = posiRef.current + 3;

    fleetRef.current.style.left = `${newPosiRef}px`;
    posiRef.current = newPosiRef;
    window.requestAnimationFrame(moveFleet);
  };

  const startInvasion = () => {
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
