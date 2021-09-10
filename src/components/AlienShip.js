import styled from 'styled-components';

const StyledAlien = styled.span.attrs((props) => ({
  id: props.id,
  visibility: props.status ? 'visible' : 'hidden'
}))`
  font-family: 'invaders';
  color: peachpuff;
  font-size: 2.5rem;
  padding: 0;
  width: 2.65rem;
  height: 2.65rem;
  margin: 0.5rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.status ? 'visible' : 'hidden')};
`;

const AlienShip = ({ status, id, type }) => {
  console.log('ship render');
  return (
    <StyledAlien id={id} status={status} className="ship">
      <span>{type}</span>
    </StyledAlien>
  );
};

export default AlienShip;
