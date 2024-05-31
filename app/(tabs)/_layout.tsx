// File path: /linesight/app/(tabs)/_layout.tsx
// Handles styling and labelling of navigation bar and also the routing to those tabs.
// Does not apply to login/register
// This also comes with a header that can be disabled.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ManageExpense from './ManageExpense';
import Finance from './finance';
import List from './list';
import Home from './home';
import { GlobalStyles } from '../../Styles/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from '../../assets/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <BottomTabs.Navigator screenOptions={ ({navigation}) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500}, 
      headerTintColor:'white',
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({tintColor}) => (
      <IconButton icon="add" size={20} color={tintColor} onPress={() => {navigation.navigate('/(tabs)/ManageExpense')}}/>
      ),
    })}
    >
      <BottomTabs.Screen 
      name="home" 
      component={Home} 
      options={{
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon:({color, size})=> <Ionicons name="hourglass" size={size} color={color}/>
      }}
      />
      <BottomTabs.Screen 
      name="finance" 
      component={Finance} 
      options={{
        title: 'Finance',
        tabBarLabel: 'Finance',
        tabBarIcon:({color, size})=> <Ionicons name="hourglass" size={size} color={color}/>
      }}
      />
      <BottomTabs.Screen 
      name="list" 
      component={List} 
      options={{
        title: 'To Do',
        tabBarLabel: 'To Do',
        tabBarIcon:({color, size})=> <Ionicons name="calendar" size={size} color={color}/>
      }}
      />
    </BottomTabs.Navigator>
  );
}
