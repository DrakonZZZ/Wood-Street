import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utilities/helper';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCartTotal = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  .total {
    border: 1px solid var(--grey-9);
    border-radius: var(--radius);
    padding: 2rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    color: gray;
    text-transform: capitalize;
  }
  h4 {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 500;
  }
`;

const CartTotals = () => {
  const { totalAmount, shippingCharges } = useCartContext();
  return (
    <StyledCartTotal>
      <div>
        <div className="total">
          <h5>
            Total : <span>{formatPrice(totalAmount)}</span>
          </h5>
          <p>
            Shipping Charges : <span>{formatPrice(shippingCharges)}</span>
          </p>
          <hr />
          <h4>
            Grand Total :{' '}
            <span>{formatPrice(totalAmount + shippingCharges)}</span>
          </h4>
          <Link to="/checkout" className="btn">
            Checkout
          </Link>
        </div>
      </div>
    </StyledCartTotal>
  );
};

export default CartTotals;
