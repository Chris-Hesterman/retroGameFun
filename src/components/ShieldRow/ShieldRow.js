import Shield from '../Shield/Shield';
import { StyledRow } from './ShieldRowStyles';

const ShieldRow = () => {
  return (
    <StyledRow>
      <Shield />
      <Shield />
      <Shield />
    </StyledRow>
  );
};

export default ShieldRow;
