import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const StyledContact = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  h4 {
    color: var(--primary-3);
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid rgb(233, 232, 232);
  }
  .form-input {
    border-right: none;
    color: var(--grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .form-input:focus {
    outline: none;
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border: none;
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--black);
  }
  .submit-btn:hover {
    color: var(--white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

const Contact = () => {
  const [state, handleSubmit] = useForm('mbjvjrkn');
  return (
    <StyledContact>
      <div className="section-center">
        <h3>Contact Us via Email</h3>
        <h4>Get 15% off on your first registration</h4>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            recusandae officia similique vel aperiam sunt saepe incidunt iusto
            fuga nostrum quas ratione maiores sapiente asperiores, adipisci
            accusantium amet veritatis voluptate?
          </p>
          {state.succeeded ? (
            <h4>Thanks for Contacting us!</h4>
          ) : (
            <FormComponent handleSubmit={handleSubmit} state={state} />
          )}
        </div>
      </div>
    </StyledContact>
  );
};

const FormComponent = ({ handleSubmit, state }) => {
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="email"
        className="form-input"
        id="email"
        placeholder="Email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button type="submit" className="submit-btn" disabled={state.submitting}>
        Contact
      </button>
    </form>
  );
};

export default Contact;
