import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Back} from '../../constants';
import Rating from './component/Rating';
import Reply from './component/Reply';

const DetailTicket = ({navigation, route}) => {
  const {data, keluhan} = route.params;

  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.containerheader}>
        <View style={styles.backs}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.backicon}>
              <Back height="100%" width="100%" />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.titleheader}>Tiket</Text>
        </View>
      </View>
      <View style={styles.containerTitleinvoice}>
        <Text style={styles.titleflatlist}>No Tiket #002 </Text>
        <TouchableWithoutFeedback>
          <View
            style={[
              styles.buttondownload,
              {
                backgroundColor: data === 'Berlangsung' ? '#007AFF' : '#AAAAAA',
              },
            ]}>
            <Text style={{color: 'white'}}>{data}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.titleflatlist1}>
        <Text style={styles.subtitleflatlist}>{keluhan}</Text>
      </View>
      <View style={styles.titleflatlist2}>
        <Text style={styles.subtitleflatlist2}>06/06/2021 (20:12)</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bodyTicket}>
          <Text style={styles.titleBodyticket}>Halo aryo,</Text>
          <Text style={styles.titleBodyticket}>
            Layanan domain Anda telah berhasil kami aktifkan. Silakan cek inbox
            email Anda untuk informasi selengkapnya. Silahkan hubungi kami jika
            membutuhkan bantuan lainnya. Terimakasih atas kepercayaan anda
            kepada DomaiNesia :)
          </Text>
          <Text style={styles.titleBodyticket}>
            Silahkan hubungi kami jika membutuhkan bantuan lainnya. Terimakasih
            atas kepercayaan anda kepada DomaiNesia :)
          </Text>
        </View>

        {data === 'Berlangsung' ? <Reply /> : <Rating />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailTicket;

const styles = StyleSheet.create({
  constainer: {flex: 1, padding: 16, backgroundColor: '#FFFFFF'},
  containerheader: {height: 54, flexDirection: 'row', marginBottom: 24},
  backs: {flexDirection: 'row', alignItems: 'center', flex: 1},
  backicon: {height: 30, width: 30},
  titleheader: {fontSize: 17, fontWeight: 'bold', marginLeft: 8},
  containerTitleinvoice: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  titleflatlist: {
    fontSize: 17,
    fontWeight: 'bold',
    flex: 1,
  },
  buttondownload: {
    height: 34,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  titleflatlist1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  titleflatlist2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitleflatlist: {fontSize: 20, color: '#092C4C', fontWeight: 'bold'},
  titleflatlist2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitleflatlist2: {
    fontSize: 12,
    color: '#AAAAAA',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  bodyTicket: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 16,
    borderRadius: 5,
  },
  titleBodyticket: {fontSize: 15, marginBottom: 16, lineHeight: 25},
});
