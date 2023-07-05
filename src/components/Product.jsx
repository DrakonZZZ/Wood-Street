import { formatPrice } from '../utilities/helper';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledProduct = styled.article`
  .product-section {
    position: relative;
    background: var(--black);
    border-radius: var(--radius);
    overflow: hidden;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    transform: translate(-20%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    opacity: 0;
    padding: 0.25rem 0.8rem;
    border-radius: 
    cursor: pointer;
  }
  .product-section:hover img {
    transform: scale(1.1);
    opacity: 0.4;
  }
  .product-section:hover .link {
    border-radius: 20px;
    background-color:  rgba(85, 85, 85, 0.5);
    opacity: 1;
  }
  footer {
    position: absolute;
    top: 10px;
    left: 10px;
    opacity: 0;
    transition: var(--transition);
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer h5 {
    color: white;
  }

  footer p {
    color: var(--primary-5);
    letter-spacing: var(--spacing);
  }

  .product-section:hover footer {
    opacity: 1;
  }
`;

const Product = ({ id, name, price, image }) => {
  return (
    <StyledProduct>
      <div className="product-section">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          View info
        </Link>{' '}
        <footer>
          <h5>{name}</h5>
          <p>{formatPrice(price)}</p>
        </footer>
      </div>
    </StyledProduct>
  );
};
export default Product;
