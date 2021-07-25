import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Back, Delete, Right} from '../../constants';

const Keranjang = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.containerheader}>
        <View style={styles.backs}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.backicon}>
              <Back height="100%" width="100%" />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.titleheader}>Keranjang</Text>
        </View>
      </View>

      <View style={styles.containercontent}>
        <View style={styles.containerchekall}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.textchekall}>Pilih Semua</Text>
          <Text style={styles.texthapus}>hapus</Text>
        </View>
        <View style={styles.cardlist}>
          <View style={styles.subCardlist}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <View style={{flex: 1, marginLeft: 12, marginRight: 4}}>
              <Text style={styles.titlepaket}>Paket Hosting Bayi(SG)</Text>
              <Text style={styles.titledurasi}>Durasi 1 bulan</Text>
            </View>
            <View style={styles.cardharga}>
              <Text style={styles.titleharga}>Rp.12000</Text>
            </View>
          </View>
          <View style={styles.cardbtnharga}>
            <View style={styles.btnharga}>
              <View style={styles.icondelet}>
                <Delete height={'100%'} width={'100%'} />
              </View>
              <Text style={{color: 'white'}}>Hapus</Text>
            </View>
          </View>
        </View>

        <View style={styles.cardlist}>
          <View style={styles.subCardlist}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <View style={{flex: 1, marginLeft: 12, marginRight: 4}}>
              <Text style={styles.titlepaket}>Paket Hosting Bayi(SG)</Text>
              <Text style={styles.titledurasi}>Durasi 1 bulan</Text>
            </View>
            <View style={styles.cardharga}>
              <Text style={styles.titleharga}>Rp.12000</Text>
            </View>
          </View>
          <View style={styles.cardbtnharga}>
            <View style={styles.btnharga}>
              <View style={styles.icondelet}>
                <Delete height={'100%'} width={'100%'} />
              </View>
              <Text style={{color: 'white'}}>Hapus</Text>
            </View>
          </View>
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
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Pembayaran')}>
          <View style={styles.btnLanjut}>
            <Text style={styles.textBtnljut}>Lanjut</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default Keranjang;

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
  containerchekall: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textchekall: {
    flex: 1,
    color: '#AAAAAA',
    fontSize: 12,
    fontWeight: '600',
  },
  texthapus: {
    color: '#007AFF',
    fontSize: 12,
    fontWeight: '600',
  },
  cardlist: {
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.26,
    elevation: 3,
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 5,
  },
  subCardlist: {flexDirection: 'row', marginBottom: 16},
  titlepaket: {color: '#092C4C', fontSize: 15, fontWeight: '700'},
  titledurasi: {fontSize: 12, fontWeight: '400', color: '#AAAAAA'},
  cardharga: {alignItems: 'center', justifyContent: 'center'},
  titleharga: {color: '#AAAAAA', fontSize: 15},
  cardbtnharga: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnharga: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#AAAAAA',
    justifyContent: 'flex-end',
    height: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  icondelet: {height: 24, width: 24, marginRight: 5},
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
});
