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
      background: url('https://images.squarespace-cdn.com/content/v1/55bebb51e4b036c52ebe8c45/1564357876864-1XY4WTWJMJ3S5TG26TZY/black+and+purple+bedroom');
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
      background: url('https://buildingandinteriors.com/wp-content/uploads/2022/12/Magnificient-purple-bedroom-scaled.jpg')
        center;
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
        <img
          src="https://buildingandinteriors.com/wp-content/uploads/2022/12/Purple-theme.jpg"
          alt="fancy sofa"
          className="main-img"
        />
      </div>
      <div className="content">
        <h1>
          Create your <br />
          own safe haven
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
          debitis ipsum quidem, nobis at mollitia modi ipsa eaque excepturi.
        </p>
        <Link to="/products" className="btn main-btn">
          Choose Now
        </Link>
      </div>
    </StyledBanner>
  );
};

export default Banner;
