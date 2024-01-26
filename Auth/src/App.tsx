import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './Routes/Router';
import {Appwriteprovider} from './appwrite/AppwriteCintext';

function App(): React.JSX.Element {
  return (
    <Appwriteprovider>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Appwriteprovider>
  );
}
export default App;
