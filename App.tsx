import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DashboardStackNavigator from './src/navigation/DashboardStackNavigator';
import { View } from 'react-native';
import MainButton from './src/common/components/_atom/MainButton';


function App() {

  const onPressFN = () => {
    console.log('Pressed FN');
  };

  return (
  
    <NavigationContainer>
      <DashboardStackNavigator />
     </NavigationContainer>
   
  
  );
}

export default App;
