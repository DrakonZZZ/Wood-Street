import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import styled from 'styled-components';

const StyledError = styled.main`
  background: var(--primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 8rem;
  }
  h3 {
    color: var(--grey-3);
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

const Error = () => {
  return (
    <StyledError className="page-full">
      <section>
        <h1>404</h1>
        <h3>Page Does Not Exist!</h3>
        <Link to="/" className="btn">
          <MdOutlineArrowBackIosNew /> Back Home
        </Link>
      </section>
    </StyledError>
  );
};

export default Error;
