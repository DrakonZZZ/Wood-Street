import styled from 'styled-components';

const StyledLoading = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    color: var(--primary-3);
    font-weight: 500;
  }
`;

const Loading = () => {
  return (
    <StyledLoading className="section section-center loading">
      <h4>Loading...</h4>
    </StyledLoading>
  );
};

export default Loading;
