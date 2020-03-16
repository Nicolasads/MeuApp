import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import Routes from './src/routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
