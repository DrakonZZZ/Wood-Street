import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const { user, loginWithRedirect, logout } = useAuth0();

  const [clientUser, SetClientUser] = useState(null);

  useEffect(() => {
    SetClientUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        clientUser,
        loginWithRedirect,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
