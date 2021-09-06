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

  const changeStatus = (shipId) => {
    setFleetStatus((prevFleetStatus) => {
      prevFleetStatus.fleet[shipId] = 0;
      return { ...prevFleetStatus };
    });
  };

  return (
    <StyledApp className="App">
      <h1>Spaz Invaders</h1>
      <Fleet fleet={fleetStatus.fleet} changeStatus={changeStatus} />
      <ShieldRow />
      <Base />
    </StyledApp>
  );
};

export default App;
