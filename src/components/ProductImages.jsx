import { useState } from 'react';
import styled from 'styled-components';

const StyledImage = styled.section`
  .display {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    transition: all 200ms ease-in-out;
    transform: scale(1.1);
    box-shadow: rgba(101, 75, 107, 0.43461134453781514) 0px 2px 1px,
      rgba(101, 75, 107, 0.43461134453781514) 0px 4px 2px,
      rgba(101, 75, 107, 0.43461134453781514) 0px 8px 4px,
      rgba(101, 75, 107, 0.43461134453781514) 0px 16px 8px,
      rgba(101, 75, 107, 0.43461134453781514) 0px 32px 16px;
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

const ProductImages = ({ images = [] }) => {
  const [displayImage, setDisplayImage] = useState(images[0]);
  return (
    <StyledImage>
      <img
        src={displayImage?.url}
        alt={displayImage?.name}
        className="display"
        loading="lazy"
      />
      <div className="gallery">
        {images.map((image, idx) => {
          return (
            <img
              key={image?.id}
              src={image?.url}
              alt={image?.name}
              loading="lazy"
              className={`${image.url === displayImage.url && 'active'}`}
              onClick={() => setDisplayImage(images[idx])}
            />
          );
        })}
      </div>
    </StyledImage>
  );
};

export default ProductImages;
