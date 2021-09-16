import { forwardRef } from 'react';
import { StyledAlien } from './AlienShipStyles';

const AlienShip = forwardRef(({ status, id, type }, ref) => {
  return (
    <StyledAlien id={id} status={status} ref={ref}>
      {type}
    </StyledAlien>
  );
});

export default AlienShip;
