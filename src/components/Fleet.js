import { useState } from 'react';
import AlienShip from './AlienShip';
import styled from 'styled-components';

const StyledFleet = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 60vw;
  background: black;
`;

const Fleet = ({ fleet, changeStatus }) => {
  const handleClick = (e) => {
    if (e.target.nodeName !== 'DIV') {
      changeStatus(e.target.id);
    }

    console.log(e);
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
  return <StyledFleet onClick={handleClick}>{alienShips}</StyledFleet>;
};

export default Fleet;