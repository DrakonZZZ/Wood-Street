import styled from 'styled-components';
import Product from './Product';

const StyledGrid = styled.section`
  footer {
    background-color: rgba(85, 85, 85, 0.8);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    padding: 0.25rem 0.5rem;
    top: 6px;
    left: 6px;
    opacity: 1;
    transition: var(--transition);
    border-radius: 4px;
  }
  footer h5 {
    color: white;
  }

  footer p {
    color: rgb(197, 197, 197);
  }

  .product-section:hover footer {
    opacity: 0;
  }

  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const GridView = ({ filteredProducts }) => {
  return (
    <StyledGrid>
      <div className="products-container">
        {filteredProducts.map((products) => {
          return <Product key={products.id} {...products} />;
        })}
      </div>
    </StyledGrid>
  );
};

export default GridView;
