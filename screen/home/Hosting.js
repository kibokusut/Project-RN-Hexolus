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
    PaketHosting: 'Bayi(singapura)',
    expired: '15/08/2021',
    aktif: true,
    location: 'Singapore - Valerion',
    hostname: 'valerion.sg.rapidplex.com',
    ipv4: '139.162.30.170',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    domain: 'meraihmimpi.net',
    PaketHosting: 'Bayi(singapura)',
    expired: '15/08/2021',
    aktif: true,
    location: 'Singapore - Valerion',
    hostname: 'valerion.sg.rapidplex.com',
    ipv4: '139.162.30.170',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    domain: 'ayobelajar.id',
    PaketHosting: 'Bayi(singapura)',
    expired: '15/08/2021',
    aktif: false,
    location: 'Singapore - Valerion',
    hostname: 'valerion.sg.rapidplex.com',
    ipv4: '139.162.30.170',
  },
];

const Item = ({domain, PaketHosting, expired, location, hostname, ipv4}) => {
  const [hide, setHide] = useState(false);
  const onExpand = () => {
    setHide(!hide);
  };
  return (
    <View style={styles.itemcontainerflatlist}>
      <Text style={styles.titleflatlist}>{domain}</Text>
      <View style={styles.titleflatlist1}>
        <Text style={styles.subtitleflatlist}>Paket Hosting</Text>
        <Text style={styles.subtitleflatlist}>Expired Date</Text>
      </View>
      <View style={styles.titleflatlist2}>
        <Text style={styles.subtitleflatlist2}>{PaketHosting}</Text>
        <Text style={styles.subtitleflatlist2}>{expired}</Text>
      </View>

      {hide && (
        <View>
          <Text style={styles.titleexpand}>Server Information</Text>
          <View style={styles.titleflatlist2}>
            <Text style={styles.subtitleflatlist3}>Location</Text>
            <Text style={styles.subtitleflatlist2}>{location}</Text>
          </View>
          <View style={styles.titleflatlist2}>
            <Text style={styles.subtitleflatlist3}>Hostname</Text>
            <Text style={styles.subtitleflatlist2}>{hostname}</Text>
          </View>
          <View style={styles.titleflatlist2}>
            <Text style={styles.subtitleflatlist3}>IPv4</Text>
            <Text style={styles.subtitleflatlist2}>{ipv4}</Text>
          </View>
        </View>
      )}

      <TouchableWithoutFeedback onPress={onExpand}>
        <View>
          <Text style={styles.btnexpand}>
            {hide ? 'Tutup Detail' : 'Lihat Selengkapnya'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const Hosting = ({navigation}) => {
  const [refresh, setRefresh] = useState(false);
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      domain={item.domain}
      PaketHosting={item.PaketHosting}
      expired={item.expired}
      location={item.location}
      hostname={item.hostname}
      ipv4={item.ipv4}
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
          <Text style={styles.titleheader}>My Hosting</Text>
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

export default Hosting;

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
    marginBottom: 8,
  },
  subtitleflatlist: {fontSize: 15, color: '#AAAAAA', fontWeight: '600'},
  subtitleflatlist2: {fontSize: 12, color: '#092C4C', fontWeight: '600'},
  subtitleflatlist3: {fontSize: 15, color: '#092C4C', fontWeight: 'bold'},
  btnexpand: {
    textAlign: 'center',
    paddingVertical: 16,
    color: '#007AFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  titleexpand: {
    color: '#092C4C',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 16,
  },
});
