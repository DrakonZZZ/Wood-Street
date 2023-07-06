import { formatPrice } from '../utilities/helper';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--primary-4);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

const ListView = ({ filteredProducts }) => {
  return (
    <StyledList>
      {filteredProducts.map((products) => {
        const { id, name, price, image, description } = products;
        return (
          <div key={id}>
            <img src={image} alt={name} loading="lazy" />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 100)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Info
              </Link>
            </div>
          </div>
        );
      })}
    </StyledList>
  );
};

export default ListView;
