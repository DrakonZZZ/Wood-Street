import { useFilterContext } from '../context/filter_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import styled from 'styled-components';

const StyledSort = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid white;
      color: var(--primary-3);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      transition: all 230ms ease-in-out;
      background: var(--primary-2);
      color: var(--primary-6);
    }
  }

  hr {
    border: 1px solid rgba(62, 41, 65, 0.08);
  }
  .sort-input {
    border-color: transparent;
    font-size: 0.9rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }

  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

const Sort = () => {
  const { filteredProducts, gridView } = useFilterContext();
  return (
    <StyledSort>
      <div className="btn-container">
        <button type="button" className={`${!gridView && 'active'}`}>
          <BsList />
        </button>
        <button type="button" className={`${gridView && 'active'}`}>
          <BsFillGridFill />
        </button>
      </div>
      <p>{filteredProducts.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort by</label>
        <select name="sort" id="sort" className="sort-input">
          <option value="price-lowest">Lowest Price</option>
          <option value="price-highest">Higest Price</option>
          <option value="price-ascending">A-Z</option>
          <option value="price-descending">Z-A</option>
        </select>
      </form>
    </StyledSort>
  );
};

export default Sort;
