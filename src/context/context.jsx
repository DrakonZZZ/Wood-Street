import { createContext, useContext } from 'react';

export const Globalcontext = createContext();

export const AppContext = ({ children }) => {
  return <Globalcontext.Provider>{children}</Globalcontext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(Globalcontext);
};
