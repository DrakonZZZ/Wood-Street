import { services } from '../utilities/data';
import styled from 'styled-components';

const StyledServices = styled.section`
  h3 {
    color: #f6f6f6;
  }
  h4 {
    color: var(--primary-10);
  }
  padding: 5rem 0;

  background: var(--primary-4);
  .header h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--primary-6);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--primary-3);

    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--primary-7);
    }
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--primary-10);
    color: var(--primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;

const Services = () => {
  return (
    <StyledServices>
      <div className="section-center">
        <div className="header">
          <h3>
            Custom Furniture
            <br />
            Tailored toward Your Liking
          </h3>
          <p>
            Craft your dream space with our custom furniture services. From
            unique designs to personalized finishes, tailor each piece to match
            your style. Experience furniture that reflects your taste and fits
            seamlessly into your home – your vision, our craftsmanship.
          </p>
        </div>
        <div className="services-center">
          {services.map((service) => {
            const { id, text, icon, title } = service;

            return (
              <div key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </StyledServices>
  );
};

export default Services;
