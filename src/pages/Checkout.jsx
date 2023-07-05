import { PageHero, StripeCheckout } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCheckout = styled.div``;

const Checkout = () => {
  return (
    <main>
      <PageHero navigator="checkout" />
      <StyledCheckout className="page">
        <h3>Checkout</h3>
      </StyledCheckout>
    </main>
  );
};

export default Checkout;
