import { forwardRef } from 'react';
import { makeShips } from '../../utils/functions.js';
import { StyledFleet } from './FleetStyles';

const Fleet = forwardRef(({ fleet, changeStatus }, ref) => {
  const alienShips = makeShips(fleet);

  const handleClick = (e) => {
    if (e.target.nodeName === 'SPAN') {
      console.log([
        e.target.textContent,
        e.target.offsetTop,
        e.target.offsetLeft
      ]);
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
