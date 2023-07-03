// import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utilities/data';
import CartIcons from './CartIcons';
import { useUserContext } from '../context/user_context';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--primary-1);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--primary-4);
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--grey-10);
    color: var(--grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    transition: var(--transition);
    transform: translate(100%);
    z-index: -1;
  }
  .display-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-container {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

const Sidebar = () => {
  const { isSidebarDisplay, hideSidebar } = useProductsContext();
  return (
    <StyledSidebar>
      <aside
        className={`${
          isSidebarDisplay ? 'sidebar display-sidebar' : 'sidebar'
        }`}
      >
        <div className="sidebar-header">
          <h3>Wood Street</h3>
          <button type="button" className="close-btn" onClick={hideSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((navLinks) => {
            const { id, text, urls } = navLinks;
            return (
              <li key={id}>
                <Link to={urls} onClick={hideSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout" onClick={hideSidebar}>
              Checkout
            </Link>
          </li>
        </ul>
        <CartIcons />
      </aside>
    </StyledSidebar>
  );
};

export default Sidebar;
