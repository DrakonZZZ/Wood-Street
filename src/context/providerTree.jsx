/* eslint-disable react/display-name */
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './user_context';
import { ProductsProvider } from './products_context';
import { FilterProvider } from './filter_context';
import { CartProvider } from './cart_context';

const buildProvidersTree = (providersWithProps) => {
  const initialComponent = ({ children }) => <>{children}</>;
  return providersWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      // eslint-disable-next-line react/prop-types
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent
  );
};

const ProvidersTree = buildProvidersTree([
  [
    Auth0Provider,
    {
      domain: import.meta.env.VITE_DOMAIN,
      clientId: import.meta.env.VITE_CLIENTID,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
      cacheLocation: 'localstorage',
    },
  ],
  [UserProvider],
  [ProductsProvider],
  [FilterProvider],
  [CartProvider],
]);

export default ProvidersTree;
