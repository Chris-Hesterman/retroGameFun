import AlienShip from './AlienShip';
import styled from 'styled-components';
import { forwardRef } from 'react';

const StyledFleet = styled.div`
  display: none;
  justify-content: center;
  flex-wrap: wrap;
  width: 600px;
  max-width: 620px;
  height: 265px;
  background: none;
  position: absolute;
  row-gap: 0;
`;

const Fleet = forwardRef(({ fleet, changeStatus, shipRef }, ref) => {
  const handleClick = (e) => {
    if (e.target.nodeName !== 'SPAN') {
      changeStatus(e.target.id);
    }
  };

  const alienShips = fleet.map((ship, index, array) => {
    return (
      <AlienShip
        status={fleet[index]}
        id={index}
        key={index}
        type={index <= 10 ? 'e' : index <= 32 ? 'b' : 'f'}
        ref={shipRef}
      />
    );
  });

  return (
    <StyledFleet ref={ref} onClick={handleClick}>
      {console.log('fleet render')}
      {alienShips}
    </StyledFleet>
  );
});

export default Fleet;
