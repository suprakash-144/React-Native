import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Flatcard from './Component/Flatcard';
import Scrollcard from './Component/Scrollcard';
import Fancycard from './Component/Fancycard';
import Actioncard from './Component/Actioncard';
import Contactlist from './Component/Contactlist';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcard />
        <Scrollcard />
        <Fancycard />
        <Contactlist />
        <Actioncard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
