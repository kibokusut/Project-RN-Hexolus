import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const CariDomain = ({editable}) => {
  return (
    <View style={style.containerinput}>
      <View style={{flex: 1}}>
        <TextInput
          editable={editable ? true : false}
          placeholder="Cari Domain"></TextInput>
      </View>
      <View>
        <Text style={style.comtext}>.Com</Text>
      </View>
      <View>
        <Text style={style.btncheck}>Check</Text>
      </View>
    </View>
  );
};

export default CariDomain;

const style = StyleSheet.create({
  containerinput: {
    // marginVertical: 24,
    backgroundColor: 'white',
    height: 64,
    // marginLeft: 16,
    width: '100%',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
    elevation: 5,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  comtext: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    color: 'black',
  },
  btncheck: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 4,
    color: 'white',
    fontWeight: 'bold',
  },
});
