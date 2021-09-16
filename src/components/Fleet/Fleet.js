import { forwardRef } from 'react';
import { makeShips } from '../../utils/functions.js';
import { StyledFleet } from './FleetStyles';

const Fleet = forwardRef(({ fleet, changeStatus, shipRef }, ref) => {
  const alienShips = makeShips(fleet, shipRef);

  const handleClick = (e) => {
    if (e.target.nodeName === 'SPAN') {
      changeStatus(e.target.id);
    }
  };

  return (
    <StyledFleet ref={ref} onClick={handleClick}>
      {console.log('fleet render')}
      {alienShips}
    </StyledFleet>
  );
});

export default Fleet;
