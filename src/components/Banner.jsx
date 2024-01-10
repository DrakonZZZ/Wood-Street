import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBanner = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    text-align: right;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 2fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .main-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 20%;
      height: 80%;
      background: url('./b&p-bedroom.jpg');
      bottom: 10%;
      left: -15%;
      border-radius: 8px;
      opacity: 0.8;
    }
    .img-container::after {
      content: '';
      position: absolute;
      width: 20%;
      height: 80%;
      background: url('./purple-bedroom.jpg') center;
      bottom: 10%;
      right: -15%;
      border-radius: var(--radius);
      opacity: 0.8;
      z-index: -1;
    }
  }
`;

const Banner = () => {
  return (
    <StyledBanner className="section-center">
      <div className="img-container">
        {' '}
        <img src="./purple wall.jpg" alt="fancy sofa" className="main-img" />
      </div>
      <div className="content">
        <h1>
          Create your <br />
          own safe haven
        </h1>
        <p>
          Discover stylish furniture at our online store. From modern sofas to
          elegant tables, find quality pieces for your home today!
        </p>
        <Link to="/products" className="btn main-btn">
          Choose Now
        </Link>
      </div>
    </StyledBanner>
  );
};

export default Banner;
