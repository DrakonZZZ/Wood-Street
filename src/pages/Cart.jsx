import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';
import styled from 'styled-components';

const StyledAddCart = styled.main`
  .content-container {
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
    height: 600px;
    border-radius: var(--radius);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 20px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 2px 26px -15px inset;
    h3 {
      text-align: center;
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <StyledAddCart className="page-full">
        <div className="content-container ">
          <h3>Cart is empty</h3>
          <Link to="/products" className="btn">
            Add Items
          </Link>
        </div>
      </StyledAddCart>
    );
  }
  return (
    <section>
      <PageHero navigator="cart" />
      <StyledAddCart className="page">
        <CartContent />
      </StyledAddCart>
    </section>
  );
};

export default Cart;
