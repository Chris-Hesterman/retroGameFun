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
  const fleetLeft = useRef(20);
  const fleetTop = useRef(100);
  const fleetRef = useRef();
  let speed = 10;
  let interval = 500;
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
    // console.log('App Fleet Left : ', fleetLeft.current);
    let newfleetTop;
    const ships = fleetRef.current.childNodes;
    let moveSideways = true;

    soundArray[soundIndex].play();

    if (fleetLeft.current > 580) {
      speed = -speed;
      interval -= 75;
      newfleetTop = fleetTop.current + 25;
      fleetTop.current = newfleetTop;
      fleetRef.current.style.top = `${newfleetTop}px`;
      moveSideways = false;
      fleetLeft.current = 580;
    }
    if (fleetLeft.current < 20) {
      speed = -speed;
      interval -= 75;
      newfleetTop = fleetTop.current + 25;
      fleetTop.current = newfleetTop;
      fleetRef.current.style.top = `${newfleetTop}px`;
      moveSideways = false;
      fleetLeft.current = 20;
    }

    const newfleetLeft = moveSideways
      ? fleetLeft.current + speed
      : fleetLeft.current;

    fleetRef.current.style.left = `${newfleetLeft}px`;
    fleetLeft.current = newfleetLeft;

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
      />
      <ShieldRow />
      <Base />
    </StyledApp>
  );
};

export default App;
