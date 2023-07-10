import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const StyledAuth = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <StyledAuth>
        <h1>{error}.</h1>
      </StyledAuth>
    );
  }
  if (error) {
    <StyledAuth>
      <h1>Error</h1>
    </StyledAuth>;
  }
  return <>{children}</>;
};

export default AuthWrapper;
