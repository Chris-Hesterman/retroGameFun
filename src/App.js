import { useState } from 'react';
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
  const [direction, setDirection] = useState(0);

  const changeStatus = (shipId) => {
    setFleetStatus((prevFleetStatus) => {
      prevFleetStatus.fleet[shipId] = 0;
      return { ...prevFleetStatus };
    });
  };

  const handleMove = (e) => {
    if (
      e.key !== direction &&
      (e.key === 'ArrowLeft' || e.key === 'ArrowRight')
    ) {
      setDirection(e.key);
    }
  };

  const handleStop = (e) => {
    setDirection(0);
  };

  return (
    <StyledApp
      className="App"
      onKeyDown={handleMove}
      onKeyUp={handleStop}
      tabIndex="0"
    >
      <h1>Spaz Invaders</h1>
      <Fleet fleet={fleetStatus.fleet} changeStatus={changeStatus} />
      <ShieldRow />
      <Base direction={direction} />
    </StyledApp>
  );
};

export default App;
