import React, {useContext, useEffect, useState} from 'react';
import {AppwriteContext} from '../appwrite/AppwriteCintext';
import Loading from '../Components/Loading';
import Authstack from './Authstack';
import Appstack from './Appstack';
import {NavigationContainer} from '@react-navigation/native';
const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {appwrite, isLoggedIn, setisLoggedIn} = useContext(AppwriteContext);
  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then(response => {
        setIsLoading(false);
        if (response) {
          setisLoggedIn(true);
        }
      })
      .catch(_ => {
        setIsLoading(false);
        setisLoggedIn(false);
      });
  }, [appwrite]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {isLoggedIn ? <Appstack /> : <Authstack />}
    </NavigationContainer>
  );
};

export default Router;
