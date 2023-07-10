import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import styled from 'styled-components';

const StyledCartIcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-counter {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--primary-3);
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    font-size: 0.7rem;
    color: var(--white);
    padding: 10px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--primary-2);
    padding:0.2rem;
    color: white;
    border-color: transparent;
    border-radius: 4px;
    font-size: 1.5rem;
    cursor: pointer;
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
      background: white;
      border-radius: 50%;
      padding: 4px;
      color: var(--primary-1);
    }
    .profile{
      margin-left: 5px;
      padding: 4px;
      width:30px;
      hieght:30px;
      border-radius: 50%;
    }
    }
  }
`;

const CartIcons = () => {
  const { hideSidebar } = useProductsContext();
  const { totalItems } = useCartContext();
  const { loginWithRedirect, clientUser, logout } = useUserContext();
  console.log(clientUser);
  return (
    <StyledCartIcon className="cart-btn-container">
      <Link to="/cart" className="cart-btn" onClick={hideSidebar}>
        Cart{' '}
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-counter">{totalItems}</span>
        </span>
      </Link>
      {clientUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
          <img
            src={clientUser?.picture}
            alt={clientUser.nickname}
            className="profile"
          />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          Login
          <FaUser />
        </button>
      )}
    </StyledCartIcon>
  );
};

export default CartIcons;
