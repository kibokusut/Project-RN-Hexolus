import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const LayananPribadi = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={style.titleContainer}>
        <Text style={style.subtitle}>Layanan Pribadi</Text>
        <Text style={style.titlemore}>Lihat Semua</Text>
      </View>

      <View
        style={{flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 8}}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Domain')}>
          <View
            style={{
              width: '50%',
              height: 130,
              // backgroundColor: 'red',
              padding: 8,
            }}>
            <LinearGradient
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'grey',
                borderRadius: 8,
                padding: 10,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1.3}}
              colors={['#002affd8', '#09F0FF']}>
              <Text style={{color: 'white', fontSize: 27, marginBottom: 4}}>
                5
              </Text>
              <Text style={{fontSize: 12, color: 'white', marginBottom: 16}}>
                Aktif
              </Text>

              <Text style={{fontSize: 15, color: 'white'}}>Domain</Text>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Website')}>
          <View
            style={{
              width: '50%',
              height: 130,
              // backgroundColor: '#0029FF',
              padding: 8,
            }}>
            <LinearGradient
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'grey',
                borderRadius: 8,
                padding: 10,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1.3}}
              colors={['#002affd8', '#09F0FF']}>
              <Text style={{color: 'white', fontSize: 27, marginBottom: 4}}>
                5
              </Text>
              <Text style={{fontSize: 12, color: 'white', marginBottom: 16}}>
                Aktif
              </Text>

              <Text style={{fontSize: 15, color: 'white'}}>Website</Text>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Ssl')}>
          <View
            style={{
              width: '50%',
              height: 130,
              padding: 8,
            }}>
            <LinearGradient
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'grey',
                borderRadius: 8,
                padding: 10,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1.3}}
              colors={['#002affd8', '#09F0FF']}>
              <Text style={{color: 'white', fontSize: 27, marginBottom: 4}}>
                5
              </Text>
              <Text style={{fontSize: 12, color: 'white', marginBottom: 16}}>
                Aktif
              </Text>

              <Text style={{fontSize: 15, color: 'white'}}>SSL</Text>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Hosting')}>
          <View
            style={{
              width: '50%',
              height: 130,
              padding: 8,
            }}>
            <LinearGradient
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'grey',
                borderRadius: 8,
                padding: 10,
              }}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1.3}}
              colors={['#002affd8', '#09F0FF']}>
              <Text style={{color: 'white', fontSize: 27, marginBottom: 4}}>
                5
              </Text>
              <Text style={{fontSize: 12, color: 'white', marginBottom: 16}}>
                Aktif
              </Text>

              <Text style={{fontSize: 15, color: 'white'}}>Hosting</Text>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default LayananPribadi;

const style = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontSize: 17,
    color: '#092C4C',
    fontWeight: 'bold',
  },
  titlemore: {fontSize: 12, color: '#007AFF'},
});
