import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utilities/data';
import CartIcons from './CartIcons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(34, 35, 35, 0.15) 0px 1px 3px 1px;
  z-index: 99;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-hamburger {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-container {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-hamburger {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-container {
      display: grid;
    }
  }
`;

const Nav = () => {
  const { showSidebar } = useProductsContext();
  return (
    <StyledNavbar>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3>Wood Street</h3>
          </Link>
          <button type="button" className="nav-hamburger" onClick={showSidebar}>
            {<FaBars />}
          </button>
        </div>
        <ul className="nav-links">
          {links.map((navLink) => {
            const { id, text, url } = navLink;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartIcons />
      </div>
    </StyledNavbar>
  );
};

export default Nav;
