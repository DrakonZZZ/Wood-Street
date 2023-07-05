import { PageHero } from '../components';
// import aboutImg from '../assets/hero-bcg.jpeg';
import styled from 'styled-components';

const StyledAbout = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const About = () => {
  return (
    <main>
      <PageHero navigator="About" />
      <StyledAbout className="section section-center page-full">
        <div className="title">
          <h2>Our History</h2>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            nulla velit dolore doloribus ipsum, eaque unde aliquid. Consectetur
            molestias dicta, voluptate soluta quidem cupiditate facilis.
            Exercitationem sed sequi eaque quas corporis error mollitia quam
            quasi quae atque facilis laudantium quidem aut nostrum quis, dolore
            nulla sapiente neque, asperiores inventore ea?
          </p>
        </div>
        <img
          src="https://i.pinimg.com/originals/98/5b/cf/985bcf7008b2ce7a2a57d2802caa1055.jpg"
          alt=""
        />
      </StyledAbout>
    </main>
  );
};

export default About;
