// File path: /linesight/app/(tabs)/_layout.tsx
// Handles styling and labelling of navigation bar and also the routing to those tabs.
// Does not apply to login/register
// This also comes with a header that can be disabled.

import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="finance"
        options={{
          title: 'Finance',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="checklists"
        options={{
          title: 'To-Do',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          href: null,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'dynamic stuff',
          href: null,
        }}
      />
      <Tabs.Screen
        name="expense"
        options={{
          title: 'Expense',
          href: null,
        }}
      />
    </Tabs>
  );
}
