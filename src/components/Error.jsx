import styled from 'styled-components';

const StyledError = styled.section`
  h4 {
    color: #eae6eb;
    font-weight: 500;
  }
`;

const Error = () => {
  return (
    <StyledError className="section section-center text-center loading">
      <h4>Error! Please try after some time...</h4>
    </StyledError>
  );
};

export default Error;
