import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

const ErrorPage = () => {
  return <h4>error page</h4>;
};

export default ErrorPage;
