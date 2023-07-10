import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from '../components';
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  AuthWrapper,
} from '.';

const Layout = () => {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
};

export default Layout;
