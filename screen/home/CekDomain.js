import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Back, Cartwhite, Close, Chekok} from '../../constants';
import CariDomain from './component/CariDomain';

const CekDomain = ({navigation}) => {
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.containerheader}>
        <View style={styles.backs}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.backicon}>
              <Back height="100%" width="100%" />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.titleheader}>Cek Ketersediaan Domainmu</Text>
        </View>
      </View>
      <View style={{marginBottom: 24}}>
        <CariDomain editable />
      </View>

      <View style={styles.listCekcontainer}>
        <View style={styles.cekok}>
          <Chekok height={'100%'} width={'100%'} />
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 17, color: '#369F6F'}}>domaincnth.Net</Text>
          <Text>Rp. 125.000</Text>
        </View>
        <View style={styles.cartok}>
          <Cartwhite height={'70%'} width={'70%'} />
        </View>
      </View>

      <View style={styles.listCekcontainer}>
        <View style={styles.cekok}>
          <Close height={'100%'} width={'100%'} />
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 17, color: '#FF3145'}}>domaincnth.Net</Text>
          <Text>Rp. 125.000</Text>
        </View>
        <View style={styles.cartnook}>
          <Text style={{color: 'white'}}>WhoIs</Text>
        </View>
      </View>

      <View style={styles.listCekcontainer}>
        <View style={styles.cekok}></View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 17, color: '#369F6F'}}>domaincnth.Net</Text>
          <Text>Rp. 125.000</Text>
        </View>
        <View style={styles.cartok}>
          <Cartwhite height={'70%'} width={'70%'} />
        </View>
      </View>

      <View style={styles.listCekcontainer}>
        <View style={styles.cekok}></View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 17, color: '#000'}}>domaincnth.Net</Text>
          <Text>Rp. 125.000</Text>
        </View>
        <View style={[styles.cartok, {backgroundColor: '#CFCFCF'}]}>
          <Cartwhite height={'70%'} width={'70%'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CekDomain;

const styles = StyleSheet.create({
  constainer: {flex: 1, padding: 16, backgroundColor: '#FFFFFF'},
  containerheader: {height: 54, flexDirection: 'row', marginBottom: 24},
  backs: {flexDirection: 'row', alignItems: 'center', flex: 1},
  backicon: {height: 30, width: 30},
  titleheader: {fontSize: 17, fontWeight: 'bold', marginLeft: 8},

  listCekcontainer: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
    elevation: 5,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    padding: 16,
    marginHorizontal: 1,
  },
  cekok: {height: 25, width: 25, marginRight: 12},
  cartok: {
    height: 36,
    width: 36,
    backgroundColor: '#369F6F',
    borderRadius: 5,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartnook: {
    backgroundColor: '#FF3145',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
