import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filteredProducts, gridView } = useFilterContext();

  if (filteredProducts.length < 1) {
    return <ErrorMessage />;
  }
  if (!gridView) {
    return <ListView filteredProducts={filteredProducts} />;
  }
  return <GridView filteredProducts={filteredProducts} />;
};

const ErrorMessage = () => {
  return (
    <>
      <h5 style={{ textTransform: 'none' }}>
        Your search returned no products...
      </h5>
    </>
  );
};

export default ProductList;
