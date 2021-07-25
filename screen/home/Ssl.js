import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Back, Down} from '../../constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    domain: 'Testingdomain.net',
    paketssl: 'Sectigo SSL',
    expired: '15/08/2021',
    aktif: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    domain: 'meraihmimpi.net',
    paketssl: 'Sectigo SSL',
    expired: '15/08/2021',
    aktif: true,
  },
];

const Item = ({domain, paketssl, expired}) => (
  <View style={styles.itemcontainerflatlist}>
    <Text style={styles.titleflatlist}>{domain}</Text>
    <View style={styles.titleflatlist1}>
      <Text style={styles.subtitleflatlist}>Paket SSL</Text>
      <Text style={styles.subtitleflatlist}>Expired Date</Text>
    </View>
    <View style={styles.titleflatlist2}>
      <Text style={styles.subtitleflatlist2}>{paketssl}</Text>
      <Text style={styles.subtitleflatlist2}>{expired}</Text>
    </View>
  </View>
);

const Ssl = ({navigation}) => {
  const [refresh, setRefresh] = useState(false);
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      domain={item.domain}
      paketssl={item.paketssl}
      aktif={item.aktif}
      expired={item.expired}
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
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.backicon}>
              <Back height="100%" width="100%" />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.titleheader}>My SSL</Text>
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

export default Ssl;

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
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 16,
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
  subtitleflatlist: {fontSize: 15, color: '#AAAAAA', fontWeight: '600'},
  subtitleflatlist2: {fontSize: 12, color: '#092C4C', fontWeight: 'bold'},
});
