import React from 'react';
import {Button, Text, View} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}></Button>
    </View>
  );
};

export default Profile;
