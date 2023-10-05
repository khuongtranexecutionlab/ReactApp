import React, { useState } from 'react';

export interface IAuthContext {
  auth: string;
  setAuth: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_AUTH: IAuthContext = {
  auth: '',
  setAuth: () => {}
};

const AuthContext = React.createContext<IAuthContext>(DEFAULT_AUTH);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<string>('James');

  const values: IAuthContext = React.useMemo(
    () => ({
      auth,
      setAuth
    }),
    [auth, setAuth]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
