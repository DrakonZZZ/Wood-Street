import styled from 'styled-components';

const StyledError = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    color: var(--primary-3);
    font-size: 2rem;
    font-weight: 500;
  }
`;

const Error = () => {
  return (
    <StyledError className="section section-center loading">
      <h4>Error! Please try after some time...</h4>
    </StyledError>
  );
};

export default Error;
