import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Back, Right} from '../../constants';

const Pembayaran = ({navigation}) => {
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.containerheader}>
        <View style={styles.backs}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.backicon}>
              <Back height="100%" width="100%" />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.titleheader}>Pembayaran</Text>
        </View>
      </View>

      <View style={styles.containercontent}>
        <Text style={styles.textmetodebayar}>Pilih Metode Pembayaran</Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('PembayaranListBank')}>
          <View style={styles.cardmetodepembayaran}>
            <Text style={{fontWeight: '700', fontSize: 15}}>
              Pilih Pembayaran
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.textrincianpembayara}>Rincian Pembayaran</Text>
        <View style={styles.totalbayarcard}>
          <Text style={styles.texttotalbayar}>Total Harga</Text>
          <Text style={styles.texttotalbayar}>Total Harga</Text>
        </View>
        <View style={styles.totalbayarcard}>
          <Text style={styles.texttotalbayar}>ppn 10%</Text>
          <Text style={styles.texttotalbayar}>Total Harga</Text>
        </View>
      </View>

      <View style={styles.cardkodepromo}>
        <Text>Masukan Kode Promo</Text>
        <View style={styles.backicon}>
          <Right height="100%" width="100%" />
        </View>
      </View>
      <View style={styles.cardtotalbayar}>
        <View style={{flex: 1}}>
          <Text>Total Harga</Text>
          <Text style={styles.texttotalbayar}>Rp. 400.000</Text>
        </View>
        <View style={styles.btnLanjut}>
          <Text style={styles.textBtnljut}>Bayar</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Pembayaran;

const styles = StyleSheet.create({
  constainer: {flex: 1, padding: 16, backgroundColor: '#FFFFFF'},
  containerheader: {height: 54, flexDirection: 'row', marginBottom: 16},
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
  containercontent: {flex: 1},

  cardkodepromo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    marginBottom: 16,
  },
  cardmetodepembayaran: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    marginBottom: 16,
  },
  textmetodebayar: {fontSize: 12, color: '#092C4C', marginVertical: 16},
  cardtotalbayar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texttotalbayar: {color: '#092C4C', fontSize: 17, fontWeight: '700'},
  btnLanjut: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 178,
    backgroundColor: '#007AFF',
    height: 46,
    borderRadius: 5,
  },
  textBtnljut: {color: 'white', fontSize: 16, fontWeight: '700'},
  textrincianpembayara: {fontSize: 12, color: '#092C4C', marginVertical: 16},
  totalbayarcard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  texttotalbayar: {fontSize: 15, color: '#092C4C', fontWeight: '600'},
});
