import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utilities/helper';
import { FaCheck } from 'react-icons/fa';
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
    color: var(--grey-5);
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
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
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

  console.log(companies);

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
        </form>
      </div>
    </StyledFilter>
  );
};

export default Filters;
