import AlienShip from './AlienShip';
import styled from 'styled-components';
import { useEffect, useRef, useState, forwardRef } from 'react';

const StyledFleet = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  height: 300px;
  background: none;
  position: absolute;
  /* top: 100px;
  left: 300px; */
`;

const Fleet = forwardRef(({ fleet, changeStatus }, ref) => {
  const handleClick = (e) => {
    if (e.target.nodeName !== 'DIV') {
      changeStatus(e.target.id);
    }
  };

  const alienShips = fleet.map((ship, index, array) => {
    return (
      <AlienShip
        status={fleet[index]}
        id={index}
        key={index}
        className="ship"
      />
    );
  });
  return (
    <StyledFleet ref={ref} onClick={handleClick}>
      {alienShips}
    </StyledFleet>
  );
});

export default Fleet;
