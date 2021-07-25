import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {images, Eyehide, Eyeshow} from '../../../constants';

const Input = ({title, placeholder, isPassword, ...props}) => {
  const [hide, setHide] = useState('false');
  return (
    <SafeAreaView>
      <Text
        style={{
          marginHorizontal: 16,
          marginVertical: 16,
          fontSize: 15,
          fontWeight: 'bold',
          color: '#092C4C',
        }}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#999999',
          alignItems: 'center',
          marginHorizontal: 16,
          paddingHorizontal: 16,
          marginBottom: 8,
        }}>
        <TextInput
          {...props}
          secureTextEntry={isPassword && hide ? true : false}
          placeholder={placeholder}
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            paddingVertical: 13,
          }}></TextInput>
        {isPassword ? (
          <TouchableWithoutFeedback
            onPress={() => {
              setHide(!hide);
            }}>
            <View style={{height: 24, width: 24, backgroundColor: 'white'}}>
              {hide ? (
                <Eyehide height={'100%'} width={'100%'} />
              ) : (
                <Eyeshow height={'100%'} width={'100%'} />
              )}
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Input;
