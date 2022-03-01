import { StyledAlien } from './AlienShipStyles';

const AlienShip = ({ status, id, type }) => {
  return (
    <StyledAlien id={id} status={status}>
      {console.log('rendering ship')}
      {type}
    </StyledAlien>
  );
};

export default AlienShip;
