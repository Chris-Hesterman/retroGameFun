import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledGunWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: calc(50vw - 40px);
`;
const StyledGun = styled.span`
  font-family: 'invaders';
  font-size: 5rem;
`;

const Gun = () => {
  const posiRef = useRef(window.visualViewport.width / 2 - 40);
  const [moving, setMoving] = useState(false);
  let currentSpeed = 0;
  const keyRef = useRef({ pressed: false });
  const requestId = useRef();

  const gunRef = useRef();

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
        posiRef.current <= 50 ? posiRef.current + 4 : posiRef.current - 4;
      gunRef.current.style.left = `${posiRef.current}px`;
      window.cancelAnimationFrame(requestId);
      setMoving(false);
      return;
    }
    posiRef.current += currentSpeed;
    gunRef.current.style.left = `${posiRef.current}px`;
    // console.log('handling move');

    window.requestAnimationFrame(moveGun);
  };

  const handleMove = (e) => {
    let newcurrentSpeed;
    const speed = 3;

    if (e.repeat && currentSpeed) {
      return;
    }
    console.log('event firing', e.which);
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

  const handleStop = (e) => {
    console.log('key up');
    keyRef.current.pressed = false;
    currentSpeed = 0;
    setMoving(false);
    window.cancelAnimationFrame(requestId);
  };

  useEffect(() => {
    console.log('using effect');
    window.addEventListener('keydown', handleMove);
    window.addEventListener('keyup', handleStop);
  }, []);

  return (
    <StyledGunWrapper position={posiRef} speed={currentSpeed} ref={gunRef}>
      <StyledGun>w</StyledGun>
    </StyledGunWrapper>
  );
};

export default Gun;
