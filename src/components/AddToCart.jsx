import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';
import styled from 'styled-components';

const StyledAddCart = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    transition: all 230ms ease-in-out;
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
const AddToCart = ({ singleProduct }) => {
  const { id, stock, colors } = singleProduct;
  const { addItemCart } = useCartContext();
  const [cartValue, setCartValue] = useState(1);
  const [shades, setShades] = useState(colors[0]);

  const cartIncrease = () => {
    setCartValue((prev) => {
      let curr = prev + 1;
      if (curr > stock) {
        curr = stock;
      }
      return curr;
    });
  };
  const cartDecrease = () => {
    setCartValue((prev) => {
      let curr = prev - 1;
      if (curr < 1) {
        curr = 1;
      }
      return curr;
    });
  };

  return (
    <StyledAddCart>
      <div className="colors">
        <span>Shades :</span>
        <div>
          {colors.map((hex, idx) => {
            return (
              <button
                key={idx}
                className={`${
                  shades === hex ? 'color-btn active' : 'color-btn'
                }`}
                style={{ background: hex }}
                onClick={() => setShades(hex)}
              >
                {shades === hex && <FaCheck />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          cartValue={cartValue}
          cartIncrease={cartIncrease}
          cartDecrease={cartDecrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addItemCart(id, shades, cartValue, singleProduct)}
        >
          Add to cart
        </Link>
      </div>
    </StyledAddCart>
  );
};

export default AddToCart;
