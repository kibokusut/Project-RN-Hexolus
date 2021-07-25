import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {COLORS, icons} from '../constants';
import Home from '../screen/home/Home';
import History from './../screen/history/History';
import Ticket from './../screen/ticket/Ticket';
import Profile from './../screen/profile/Profile';
import Domain from '../screen/home/Domain';
import Hosting from '../screen/home/Hosting';
import Ssl from '../screen/home/Ssl';
import Website from '../screen/home/Website';
import CekDomain from '../screen/home/CekDomain';

const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();
const StackHistory = createStackNavigator();
const StackTicket = createStackNavigator();

const MyStackHome = () => {
  return (
    <StackHome.Navigator screenOptions={{headerShown: false}}>
      <StackHome.Screen name="Home" component={Home} />
      <StackHome.Screen name="Domain" component={Domain} />
      <StackHome.Screen name="Hosting" component={Hosting} />
      <StackHome.Screen name="Ssl" component={Ssl} />
      <StackHome.Screen name="Website" component={Website} />
      <StackHome.Screen name="CekDomain" component={CekDomain} />
    </StackHome.Navigator>
  );
};

const MyStackHistory = () => {
  return (
    <StackHistory.Navigator screenOptions={{headerShown: false}}>
      <StackHistory.Screen name="History" component={History} />
    </StackHistory.Navigator>
  );
};

const MyStackTicket = () => {
  return (
    <StackTicket.Navigator screenOptions={{headerShown: false}}>
      <StackTicket.Screen name="Ticket" component={Ticket} />
    </StackTicket.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
          paddingBottom: 10,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={MyStackHome}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
              resizeMode="contain"
              source={icons.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={MyStackHistory}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
              resizeMode="contain"
              source={icons.histori}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tiket"
        component={MyStackTicket}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
              resizeMode="contain"
              source={icons.tiket}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
              resizeMode="contain"
              source={icons.home}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
