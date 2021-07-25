import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  TouchableHighlight,
} from 'react-native';
import {Bell, Cart} from '../../constants';
import Banner from './component/Banner';
import CariDomain from './component/CariDomain';
import LayananPribadi from './component/LayananPribadi';
import PaketHosting from './component/PaketHosting';
import PaketVps from './component/PaketVps';

const Home = ({route, navigation}) => {
  const [status, setStatus] = useState(true);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20}}>Halo</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Notification')}>
          <View style={style.containericonHeader}>
            <View style={style.badgeText}>
              <Text style={style.count}>2</Text>
            </View>
            <Bell width={25} height={25} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Keranjang')}>
          <View style={style.cartIcon}>
            <Cart width={25} height={25} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 1}}>
        <Banner />

        <TouchableHighlight
          underlayColor="#f1c40f0"
          style={{paddingHorizontal: 16, marginVertical: 16}}
          onPress={() => navigation.navigate('CekDomain')}>
          <CariDomain />
        </TouchableHighlight>
        {status ? (
          <LayananPribadi navigation={navigation} />
        ) : (
          <>
            <PaketHosting />
            <PaketVps />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingHorizontal: 16,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  containericonHeader: {
    height: 35,
    width: 35,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badgeText: {
    height: 15,
    width: 15,
    backgroundColor: 'red',
    position: 'absolute',
    top: 2,
    right: 2,
    borderRadius: 20,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cartIcon: {
    height: 35,
    width: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
