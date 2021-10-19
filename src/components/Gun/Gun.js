import { Howl } from 'howler';
import { useState, useRef, useEffect } from 'react';
import { StyledGunWrapper, StyledShot } from './GunStyles';

const Gun = () => {
  const posiRef = useRef(window.visualViewport.width / 2 - 26);
  let shotHeight = -30;
  // const movingRef = useRef(false);
  const [moving, setMoving] = useState(false);
  let currentSpeed = 0;
  const keyRef = useRef({ pressed: false });
  const requestId = useRef();
  let shotRequestId;
  const gunRef = useRef();
  const shotRef = useRef();
  let gunSpeed = 4;

  const moveGun = (time) => {
    if (currentSpeed === 0) {
      window.cancelAnimationFrame(requestId);
      return;
    }
    if (
      posiRef.current >= window.visualViewport.width - 90 ||
      posiRef.current <= 10
    ) {
      posiRef.current =
        posiRef.current <= 50
          ? posiRef.current + gunSpeed
          : posiRef.current - gunSpeed;
      gunRef.current.style.left = `${posiRef.current}px`;
      window.cancelAnimationFrame(requestId);
      setMoving(false);
      // movingRef.current = false;
      return;
    }
    posiRef.current += currentSpeed;
    gunRef.current.style.left = `${posiRef.current}px`;
    window.requestAnimationFrame(moveGun);
  };

  const handleMove = (e) => {
    let newCurrentSpeed;
    const speed = 3;
    const shotSound1 = new Howl({
      src: ['../assets/1.mp3'],
      html5: true,
      format: ['mp3']
    });

    if (e.type === 'keydown' && e.key === ' ') {
      if (shotRef.current.style.display !== 'inline-block') {
        shotRef.current.style.display = 'inline-block';
        shotRef.current.style.left = `${posiRef.current + 25}px`;

        fireGun(posiRef.current);
        shotSound1.play();
      }
    }
    if (e.repeat && currentSpeed) {
      return;
    }
    if (e.key === 'ArrowRight' && !keyRef.current.pressed !== e.key) {
      newCurrentSpeed = speed;
      keyRef.current.pressed = e.key;
      currentSpeed = newCurrentSpeed;
      setMoving(true);
      // movingRef.current = true;
    }
    if (e.key === 'ArrowLeft' && !keyRef.current.pressed !== e.key) {
      newCurrentSpeed = -speed;
      keyRef.current.pressed = e.key;
      currentSpeed = newCurrentSpeed;
      setMoving(true);
      // movingRef.current = true;
    }
    requestId.current = moving ? null : window.requestAnimationFrame(moveGun);
  };

  const fireGun = () => {
    shotRequestId = window.requestAnimationFrame(updateShot);
  };

  const updateShot = () => {
    shotRef.current.style.bottom = `${shotHeight + 15}px`;
    shotHeight += 15;
    if (shotHeight < 550) {
      window.requestAnimationFrame(updateShot);
    } else {
      shotRef.current.style.display = 'none';
      shotRef.current.style.bottom = '-30px';
      shotHeight = -30;
      window.cancelAnimationFrame(shotRequestId);
    }
  };

  const handleStop = (e) => {
    keyRef.current.pressed = false;
    currentSpeed = 0;
    setMoving(false);
    // movingRef.current = false;
    window.cancelAnimationFrame(requestId);
  };

  useEffect(() => {
    console.log('using effect');
    window.addEventListener('keydown', handleMove);
    window.addEventListener('keyup', handleStop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {console.log('rendering gun')}
      <StyledShot ref={shotRef}>|</StyledShot>
      <StyledGunWrapper position={posiRef} speed={currentSpeed} ref={gunRef}>
        w
      </StyledGunWrapper>
    </div>
  );
};

export default Gun;
