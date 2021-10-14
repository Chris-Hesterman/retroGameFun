import { useState, useRef } from 'react';
import { initialState } from '../../utils/initialState';
import { generateSoundModels } from '../../utils/functions';
import { GlobalStyle } from '../../GlobalStyle';
import { StyledApp, StyledTitle, StyledButton } from './AppStyles';
import Fleet from '../Fleet/Fleet';
import ShieldRow from '../ShieldRow/ShieldRow';
import Base from '../Base/Base';

const App = () => {
  const [fleetStatus, setFleetStatus] = useState(initialState);
  const [started, setStarted] = useState(false);
  const position = useRef(20);
  const height = useRef(100);
  const fleetRef = useRef(null);
  const shipRef = useRef(null);
  let speed = 10;
  let interval = 800;
  let soundIndex = 0;
  const soundPaths = [
    '../assets/7.mp3',
    '../assets/5.mp3',
    '../assets/6.mp3',
    '../assets/5.mp3'
  ];
  let soundArray = [7, 4, 5, 4];
  let shotSound;
  const shipTypes = {
    e: 'q',
    q: 'e',
    b: 'c',
    c: 'b',
    f: 'g',
    g: 'f'
  };

  const moveFleet = () => {
    let newHeight;
    const ships = fleetRef.current.childNodes;
    let moveSideways = true;

    soundArray[soundIndex].play();

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

    soundArray = generateSoundModels(soundArray, soundPaths);
    shotSound = generateSoundModels([4], soundPaths);
    console.log('shotsound', shotSound);
    setTimeout(() => {
      fleetRef.current.style.display = 'flex';
      window.requestAnimationFrame(moveFleet);
    }, 1500);
  };

  return (
    <StyledApp className="App">
      {console.log('rendering App')}
      <GlobalStyle />
      <StyledTitle>Spaced Invaders</StyledTitle>
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
