import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Send} from '../../../constants';

const Reply = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          height: 57,
          borderColor: '#AAAAAA',
          borderWidth: 1,
          borderRadius: 5,
          alignItems: 'center',
          paddingHorizontal: 16,
          marginVertical: 24,
        }}>
        <Text>Reply Tiket </Text>
        <View style={{height: 30, width: 30}}>
          <Send height={'100%'} width={'100%'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reply;
