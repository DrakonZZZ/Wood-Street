import { PageHero, StripeCheckout } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCheckout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .cart-empty {
    text-align: center;
  }
`;

const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <section>
      <PageHero navigator="checkout" />
      <StyledCheckout className="page">
        {cart.length < 1 ? (
          <div className="cart-empty">
            <h3>Your Cart is Empty</h3>
            <Link to="/products" className="btn">
              Add Product
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </StyledCheckout>
    </section>
  );
};

export default Checkout;
