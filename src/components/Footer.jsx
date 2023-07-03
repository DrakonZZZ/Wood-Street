import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: radial-gradient(
      var(--primary-3) 1.4500000000000002px,
      transparent 1.4500000000000002px
    ),
    radial-gradient(
      var(--primary-3) 1.4500000000000002px,
      var(--primary-1) 1.4500000000000002px
    );
  background-size: 58px 58px;
  background-position: 0 0, 29px 29px;
  span {
    color: var(--primary-4);
    margin: 0 0.2rem;
  }
  h5 {
    color: var(--white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h5>&copy; {new Date().getFullYear()}</h5>
      <span>Wood Street</span>
      <h5>All Rights Reserved</h5>
    </StyledFooter>
  );
};

export default Footer;
