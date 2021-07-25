import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Back, Down, Download} from '../../constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    noinvoice: '#094581',
    statuspembelian: 'Pembelian Domain',
    expired: '15/08/2021',
    harga: '12.000',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    noinvoice: '#094534',
    statuspembelian: 'Pembelian SSL',
    expired: '15/08/2021',
    harga: '900.000',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63dd',
    noinvoice: '#093231',
    statuspembelian: 'Pembelian Hosting SG',
    expired: '15/08/2021',
    harga: '100.000',
  },
];

const Item = ({noinvoice, expired, statuspembelian, harga}) => (
  <View style={styles.itemcontainerflatlist}>
    <View style={styles.containerTitleinvoice}>
      <Text style={styles.titleflatlist}>No Invoice {noinvoice} </Text>
      <TouchableWithoutFeedback onPress={() => alert('berhasil download')}>
        <View style={styles.buttondownload}>
          <View style={styles.icondownload}>
            <Download height="70%" width="70%" />
          </View>
          <Text>Download</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    <View style={styles.titleflatlist1}>
      <Text style={styles.subtitleflatlist}>{statuspembelian}</Text>
    </View>
    <View style={styles.titleflatlist2}>
      <Text style={styles.subtitleflatlist2}>{expired}</Text>
      <Text style={styles.subtitleflatlistharga}>Rp. {harga}</Text>
    </View>
  </View>
);

const History = ({navigation}) => {
  const [refresh, setRefresh] = useState(false);
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      noinvoice={item.noinvoice}
      paketssl={item.paketssl}
      expired={item.expired}
      statuspembelian={item.statuspembelian}
      harga={item.harga}
    />
  );
  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.containerheader}>
        <View style={styles.backs}>
          <TouchableWithoutFeedback>
            <View style={styles.backicon}>
              <Back height="100%" width="100%" />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.titleheader}>My Transaction</Text>
        </View>
        <View style={styles.containerselect}>
          <Text style={styles.textselect}>Terbaru</Text>
          <View style={styles.iconselect}>
            <Down height="100%" width="100%" />
          </View>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onRefresh={() => onRefresh()}
        refreshing={refresh}
      />
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  constainer: {flex: 1, padding: 16, backgroundColor: '#FFFFFF'},
  containerheader: {height: 54, flexDirection: 'row', marginBottom: 24},
  backs: {flexDirection: 'row', alignItems: 'center', flex: 1},
  backicon: {height: 30, width: 30},
  titleheader: {fontSize: 17, fontWeight: 'bold', marginLeft: 8},
  containerselect: {
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  textselect: {
    fontSize: 17,
    fontWeight: '600',
    marginRight: 8,
  },
  iconselect: {height: 30, width: 30},
  itemcontainerflatlist: {
    width: '99%',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.26,
    elevation: 5,
    padding: 16,
    marginBottom: 16,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 1,
    marginTop: 1,
  },
  titleflatlist: {
    fontSize: 17,
    fontWeight: 'bold',

    flex: 1,
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
  subtitleflatlist: {fontSize: 15, color: '#092C4C', fontWeight: 'bold'},
  subtitleflatlist2: {fontSize: 12, color: '#AAAAAA', fontWeight: 'bold'},
  subtitleflatlistharga: {fontSize: 15, color: '#092C4C', fontWeight: 'bold'},
  containerTitleinvoice: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  buttondownload: {
    height: 34,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    paddingRight: 12,
    borderRadius: 4,
  },
  icondownload: {
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
  },
});
