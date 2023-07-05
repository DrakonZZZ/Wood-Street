import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHero = styled.section`
  background: var(--primary-10);
  width: 100%;
  min-height: 8vh;
  display: flex;
  align-items: center;

  color: var(--primary-1);
  a {
    color: var(--primary-6);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--white);
  }
  h4 {
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 20px;
    width: fit-content;
    margin-bottom: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-4);
    background: var(--primary-1);
    span {
      padding-right: 0.5rem;
    }
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;
const PageHero = ({ navigator, product }) => {
  return (
    <StyledHero>
      <div className="section-center">
        <h4>
          <Link to="/">Home /</Link>
          {product && <Link to="/products">Products /</Link>}
          <span>{navigator}</span>
        </h4>
      </div>
    </StyledHero>
  );
};

export default PageHero;
