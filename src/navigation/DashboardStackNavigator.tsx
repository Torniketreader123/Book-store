import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profiles from '../screens/Profile';
import Home from '../screens/Home';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
       <Tab.Screen name="Profile" component={Profiles} />
      </Tab.Navigator>
   
  );
}