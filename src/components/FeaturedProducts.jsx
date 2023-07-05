import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';
import styled from 'styled-components';

const StyledFeatured = styled.section`
  background: var(--grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

const FeaturedProducts = () => {
  const { productsFeatured, isLoadingProducts, errorProducts } =
    useProductsContext();
  if (errorProducts) {
    return <Error />;
  }
  return (
    <StyledFeatured className="section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      {isLoadingProducts ? (
        <Loading />
      ) : (
        <div className="section-center featured">
          {productsFeatured.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      )}
    </StyledFeatured>
  );
};

export default FeaturedProducts;
