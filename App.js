import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './navigation/Tabs';
import GetStarted from './screen/getstarted/GetStarted';
import Login from './screen/auth/Login';
import Register from './screen/auth/Register';
import DetailTicket from './screen/ticket/DetailTicket';
import Keranjang from './screen/keranjang/Keranjang';
import Pembayaran from './screen/keranjang/Pembayaran';
import PembayaranListBank from './screen/keranjang/PembayaranListBank';
import Notification from './screen/notification/Notification';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'GetStarted'}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="DetailTicket" component={DetailTicket} />
        <Stack.Screen name="Keranjang" component={Keranjang} />
        <Stack.Screen name="Pembayaran" component={Pembayaran} />
        <Stack.Screen
          name="PembayaranListBank"
          component={PembayaranListBank}
        />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
