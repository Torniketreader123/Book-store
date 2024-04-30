import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DashboardStackNavigator from './src/navigation/DashboardStackNavigator';


function App() {
  return (
    <NavigationContainer>
      <DashboardStackNavigator />
    </NavigationContainer>
  );
}

export default App;
