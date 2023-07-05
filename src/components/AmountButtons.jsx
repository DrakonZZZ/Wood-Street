import { FaPlus, FaMinus } from 'react-icons/fa';
import styled from 'styled-components';

const StyledAmount = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h3 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;
const AmountButtons = ({ cartValue, cartIncrease, cartDecrease }) => {
  return (
    <StyledAmount className="amount-btns">
      <button type="button" className="amount-btn" onClick={cartDecrease}>
        <FaMinus />
      </button>
      <h3 className="amount">{cartValue}</h3>
      <button type="button" className="amount-btn" onClick={cartIncrease}>
        <FaPlus />
      </button>
    </StyledAmount>
  );
};

export default AmountButtons;
