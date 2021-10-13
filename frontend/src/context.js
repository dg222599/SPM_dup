import React, { createContext, useContext, useEffect, useState } from 'react';
import useStateCallback from './utils/useStateCallback';

const AppContext = createContext();


const AppProvider = ({ children }) => {
  const [user, setUser] = useStateCallback(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log(user, user === null);
    if (user === null) setLoggedIn(false);
    else setLoggedIn(true);
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
