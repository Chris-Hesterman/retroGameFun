import { useState, useRef, useEffect } from 'react';
import { StyledGunWrapper, StyledShot } from './GunStyles';

const Gun = () => {
  const posiRef = useRef(window.visualViewport.width / 2 - 40);
  let shotHeight = 500;
  const [moving, setMoving] = useState(false);
  let currentSpeed = 0;
  const keyRef = useRef({ pressed: false });
  const requestId = useRef();
  const gunRef = useRef();
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
      return;
    }
    posiRef.current += currentSpeed;
    gunRef.current.style.left = `${posiRef.current}px`;
    window.requestAnimationFrame(moveGun);
  };

  const handleMove = (e) => {
    let newcurrentSpeed;
    const speed = 3;

    if (e.type === 'keydown' && e.key === ' ') {
      fireGun(posiRef.current);
    }
    if (e.repeat && currentSpeed) {
      return;
    }
    if (e.key === 'ArrowRight' && !keyRef.current.pressed !== e.key) {
      newcurrentSpeed = speed;
      keyRef.current.pressed = e.key;
      currentSpeed = newcurrentSpeed;
      setMoving(true);
    }
    if (e.key === 'ArrowLeft' && !keyRef.current.pressed !== e.key) {
      newcurrentSpeed = -speed;
      keyRef.current.pressed = e.key;
      currentSpeed = newcurrentSpeed;
      setMoving(true);
    }
    requestId.current = moving ? null : window.requestAnimationFrame(moveGun);
  };

  const fireGun = (position) => {
    console.log(position);
  };

  const updateShot = () => {};

  const handleStop = (e) => {
    // console.log('key up');
    keyRef.current.pressed = false;
    currentSpeed = 0;
    setMoving(false);
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
      <StyledShot>|</StyledShot>
      <StyledGunWrapper position={posiRef} speed={currentSpeed} ref={gunRef}>
        w
      </StyledGunWrapper>
    </div>
  );
};

export default Gun;
