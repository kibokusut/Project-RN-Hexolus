import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Backwhite, Right} from '../../constants';

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.constainer}>
      <StatusBar barStyle="default" backgroundColor="#007AFF" />
      <View style={styles.containerheader}>
        <View style={styles.backs}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.backicon}>
              <Backwhite height="100%" width="100%" />
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.titleheader}>Notifications</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardnotif}>
          <Text style={styles.btnsukses}>Sukses</Text>
          <Text style={styles.titlenotif}>
            Selamat, Domain testingdomain.com anda telah berhasil didaftarkan
          </Text>
          <Text style={styles.subtitlenotif}>
            segera lakukan setting DNS pada domain agar tidak mengalami error
          </Text>
        </View>

        <View style={styles.cardnotif}>
          <Text style={styles.btnsukses}>Sukses</Text>
          <Text style={styles.titlenotif}>
            Selamat Transkasi Paket Hosting Bayi SG anda berhasil diterima
          </Text>
          <Text style={styles.subtitlenotif}>
            segera lakukan setting DNS pada domain agar tidak mengalami error
          </Text>
        </View>

        <View style={styles.cardnotif}>
          <Text style={styles.btnmenunggu}>Menunggu Pembayaran</Text>
          <Text style={styles.titlenotif}>
            Menunggu Pembayaran Paket SSL Sectigo
          </Text>
          <Text style={styles.subtitlenotif}>
            Harap segera lakukan pembayaran untuk paket sSL Sectigo dalam 1 x 24
            jam agar tidak hangus
          </Text>
        </View>

        <View style={styles.cardnotif}>
          <Text style={styles.btngagal}>Pembayaran Gagal</Text>
          <Text style={styles.titlenotif}>
            Maaf Pembayaran anda gagal di verifikasi dikarenakan telah melewati
            1x24 jam
          </Text>
          <Text style={styles.subtitlenotif}>
            Harap segera lakukan pembayaran untuk paket sSL Sectigo dalam 1 x 24
            jam agar tidak hangus
          </Text>
        </View>

        <View style={styles.cardnotif}>
          <Text style={styles.btngagal}>Pembayaran Gagal</Text>
          <Text style={styles.titlenotif}>
            Maaf Pembayaran anda gagal di verifikasi dikarenakan telah melewati
            1x24 jam
          </Text>
          <Text style={styles.subtitlenotif}>
            Harap segera lakukan pembayaran untuk paket sSL Sectigo dalam 1 x 24
            jam agar tidak hangus
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  constainer: {backgroundColor: '#F5F6F9', flex: 1},
  containerheader: {
    height: 54,
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
  },
  backs: {flexDirection: 'row', alignItems: 'center', flex: 1},
  backicon: {height: 30, width: 30},
  titleheader: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
    color: 'white',
  },

  cardnotif: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 5,
  },
  btnsukses: {
    backgroundColor: '#369F6F',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 5,
    color: 'white',
    marginBottom: 16,
  },
  btnmenunggu: {
    backgroundColor: '#FCBF49',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 5,
    color: 'white',
    marginBottom: 16,
  },
  btngagal: {
    backgroundColor: '#FE0000',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 5,
    color: 'white',
    marginBottom: 16,
  },
  titlenotif: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitlenotif: {fontSize: 12, lineHeight: 15, fontWeight: '400'},
});
