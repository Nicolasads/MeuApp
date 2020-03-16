import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../pages/Home';
import SearchScreen from '../pages/Search';
import SettingScreen from '../pages/Setting';

const Tab = createMaterialBottomTabNavigator();

export default function DashboardRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor="#424242"
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color}) => (
            <Icon name="home" color="#424242" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: ({color}) => (
            <Icon name="search1" color="#424242" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({color}) => (
            <Icon name="setting" color="#424242" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
