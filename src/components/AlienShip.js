import styled from 'styled-components';

const StyledAlien = styled.span.attrs((props) => ({
  id: props.id,
  visibility: props.status ? 'visible' : 'hidden'
}))`
  background: green;
  border-radius: 50%;
  border: 1px white solid;
  padding: 0;
  width: 2.65rem;
  height: 2.65rem;
  margin: 1rem 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.status ? 'visible' : 'hidden')};
`;

const AlienShip = ({ status, id }) => {
  return (
    <StyledAlien id={id} status={status} className="ship">
      '-_-'
    </StyledAlien>
  );
};

export default AlienShip;
