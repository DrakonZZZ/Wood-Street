import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const StyledStars = styled.div`
  display: flex;
  align-items: center;
  span {
    color: var(--primary-4);
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;

const Stars = ({ stars, reviews }) => {
  const rating = Array.from({ length: 5 }, (_, idx) => {
    const number = idx + 0.5;
    return (
      <span key={idx}>
        {stars >= idx + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <StyledStars>
      <div className="stars">{rating}</div>
      <p className="review">{reviews} customer reviews</p>
    </StyledStars>
  );
};

export default Stars;
