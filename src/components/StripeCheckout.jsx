import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utilities/helper';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const loadData = loadStripe(import.meta.env.VITE_STRIPE_KEY_PUB);

const StyledStripe = styled.section`
  form {
    margin-top: 1rem;
    width: 50vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }
  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  button {
    background: var(--primary-3);
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* /processing state, errors */
  .,
  .:before,
  .:after {
    border-radius: 50%;
  }
  . {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .:before,
  .:after {
    position: absolute;
    content: '';
  }
  .:before {
    width: 10.4px;
    height: 20.4px;
    background: var(--primary-3);
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`;

const StyledDummyCard = styled.div`
  padding: 1rem;
  border-radius: 10px;
  height: 250px;
  max-width: 400px;
  margin: 0 auto;
  color: #dadada;
  background: url('https://c4.wallpaperflare.com/wallpaper/88/260/1018/pink-nebula-wallpaper-preview.jpg')
    left center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  position: relative;
  .card-name {
    position: absolute;
    top: -10px;
    right: 1rem;
    font-size: 1.2rem;
    img {
      width: 90px;
    }
  }
  .card-number {
    position: absolute;
    bottom: 3.5rem;
    translate: 20%;
    font-size: 1.6rem;
    letter-spacing: 2px;
  }
  .card-amount {
    position: absolute;
    top: 1rem;
  }
  .card-holder-name {
    position: absolute;
    left: 1rem;
    bottom: 10px;
    font-size: 1.2rem;
  }
  .card-expi {
    position: absolute;
    right: 1rem;
    bottom: 10px;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
`;

const StripeCheckout = () => {
  return (
    <StyledStripe>
      <Elements stripe={loadData}>
        <CheckoutForm />
      </Elements>
    </StyledStripe>
  );
};

const CheckoutForm = () => {
  const { cart, totalAmount, shippingCharges, clearCart } = useCartContext();
  const { clientUser } = useUserContext();
  const navigate = useNavigate();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecert] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial,san-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: 'var(--primary-3)',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const createPaymentIntent = async () => {
    try {
      const data = await fetch('/.netlify/functions/payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart, shippingCharges, totalAmount }),
      });
      const parsedData = await data.json();
      setClientSecert(parsedData.clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        clearCart();
        navigate('/');
      }, 15000);
    }
  };

  return (
    <div>
      {succeeded ? (
        <div>
          <h4>Thank You!</h4>
          <h4>Your payment was successful</h4>
        </div>
      ) : (
        <StyledDummyCard>
          <div className="card-name">
            <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" />
          </div>
          <div className="card-number">4000 0566 5566 5556</div>
          <div className="card-holder-name">
            Hello, {clientUser && clientUser.nickname}
          </div>
          <div className="card-amount">
            Your total is {formatPrice(shippingCharges + totalAmount)}
          </div>
          <div className="card-expi">12/26</div>
        </StyledDummyCard>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button disabled={processing || disabled || succeeded} type="submit">
          <span id="button-text">
            {processing ? <div id="roller" className="roller"></div> : 'Pay'}
          </span>
        </button>
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            <span> Stripe dashboard</span>
          </a>
        </p>
      </form>
    </div>
  );
};

export default StripeCheckout;
