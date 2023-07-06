import { Filters, ProductList, Sort, PageHero } from '../components';
import styled from 'styled-components';

const StyledProduct = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

const ProductsPage = () => {
  return (
    <section>
      <PageHero navigator="products" />
      <StyledProduct className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </StyledProduct>
    </section>
  );
};

export default ProductsPage;
