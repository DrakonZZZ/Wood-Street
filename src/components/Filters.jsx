import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utilities/helper';
import styled from 'styled-components';

const StyledFilter = styled.section`
  border-right: 1px solid rgba(62, 41, 65, 0.08);
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--primary-10);
    border-radius: var(--radius);
    border-color: transparent;
    color: var(--primary-3);
    letter-spacing: var(--spacing);
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  }
  .search-input::placeholder {
    color: var(--primary-3);
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--primary-3);
    cursor: pointer;
  }
  .active {
    transition: all 200ms ease-in-out;
    border-color: var(--grey-5);
  }
  .company {
    width: 80%;
    color: var(--primary-3);
    background: var(--primary-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    ouline: none;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    color: var(--primary-3);
    margin-bottom: 0.25rem;
  }
  .slider {
    width: 80%;
    accent-color: var(--primary-3);
  }
  .ship {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  input[type='checkbox'] {
    accent-color: var(--primary-3);
  }
  .clear-btn {
    background: var(--primary-3);
    color: var(--white);
    padding: 0.3rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

const Filters = () => {
  const { allProducts, filterTerm, updateFilter, resetFilter } =
    useFilterContext();
  const categories = getUniqueValues(allProducts, 'category');
  const companies = getUniqueValues(allProducts, 'company');

  console.log('filtering');

  return (
    <StyledFilter>
      <div className="content">
        <form
          onSubmit={(e) => {
            e.preventDefault;
          }}
        >
          <div className="form-control">
            <input
              type="text"
              name="value"
              placeholder="search"
              className="search-input"
              value={filterTerm.value}
              onChange={updateFilter}
            />
          </div>

          <div>
            <div className="form-control">
              <h5>Company</h5>
              <select
                name="company"
                className="company"
                value={filterTerm.company}
                onChange={updateFilter}
              >
                {companies.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((item, idx) => {
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`${
                      filterTerm.category === item.toLowerCase() && 'active'
                    }`}
                    name="category"
                    onClick={updateFilter}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(filterTerm.price)}</p>
            <input
              type="range"
              name="price"
              className="slider"
              onChange={updateFilter}
              value={filterTerm.price}
              min={filterTerm.minPrice}
              max={filterTerm.maxPrice}
            />
          </div>
          <div>
            <div className="form-control ship">
              <label htmlFor="shipping">Free Shipping</label>
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                checked={filterTerm.ship}
                onChange={updateFilter}
              />
            </div>
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={resetFilter}>
          Reset Filter
        </button>
      </div>
    </StyledFilter>
  );
};

export default Filters;
