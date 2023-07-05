import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url } from '../utilities/data';
import { formatPrice } from '../utilities/helper';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSingle = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    hr {
      color: var(--primary-1);
    }
  }
  .price {
    color: var(--primary-3);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

const SingleProduct = () => {
  const { id: param } = useParams();
  const redirect = useNavigate();
  const {
    isLoadingSingle,
    errorProductSingle,
    singleProduct,
    fetchSingleProductData,
  } = useProductsContext();

  useEffect(() => {
    if (errorProductSingle) {
      setTimeout(() => {
        redirect('/');
      }, 3000);
    }
  }, [errorProductSingle]);

  useEffect(() => {
    fetchSingleProductData(`${single_product_url}${param}`);
  }, [param]);

  if (isLoadingSingle) {
    return <Loading />;
  }
  if (errorProductSingle) {
    return <Error />;
  }
  const {
    id,
    name,
    images,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
  } = singleProduct;
  return (
    <StyledSingle>
      <PageHero navigator={name} product />
      <div className="section section-center page">
        <div className="product-center">
          <ProductImages images={images} />
          <div className="content">
            <h3>{name}</h3>
            <Stars />
            <p className="info">
              <span>Product-Id :</span>
              {id}
            </p>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Availablity :</span>
              {stock > 0 ? 'In Stocks' : 'Out of Stocks'}
            </p>
            <p className="info">
              <span>Company :</span>
              {company}
            </p>
            <h5 className="price">{formatPrice(price)}</h5>
            <hr />
            {stock > 0 && <AddToCart />}
          </div>
        </div>
      </div>
    </StyledSingle>
  );
};

export default SingleProduct;
