import React, {FC, PropsWithChildren, createContext, useState} from 'react';
import appwriteauth from './service';

type AppwriteContexttype = {
  appwrite: appwriteauth;
  isLoggedIn: boolean;
  setisLoggedIn: (isLoggedIn: boolean) => void;
};
export const AppwriteContext = createContext<AppwriteContexttype>({
  appwrite: new appwriteauth(),
  isLoggedIn: false,
  setisLoggedIn: () => {},
});
export const Appwriteprovider: FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const deafultvalues = {
    appwrite: new appwriteauth(),
    isLoggedIn,
    setisLoggedIn,
  };
  return (
    <AppwriteContext.Provider value={deafultvalues}>
      {children}
    </AppwriteContext.Provider>
  );
};
