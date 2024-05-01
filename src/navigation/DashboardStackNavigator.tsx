import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';

import ProfilesScreen from '../screens/Profiles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profiles" component={ProfilesScreen} />
      
    </Tab.Navigator>
  );
}
