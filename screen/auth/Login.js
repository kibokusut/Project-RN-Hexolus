import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {images, icons} from '../../constants';
import CheckBox from '@react-native-community/checkbox';
import Input from './component/Input';
const Login = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerlogo}>
          <Image resizeMode="contain" source={images.logo} />
        </View>
        <Input title="Email" placeholder="Enter Your Email" />
        <Input title="Password" placeholder="Enter Your Password" isPassword />

        <View style={styles.containercheckbox}>
          <View style={styles.checkboxs}>
            <View style={styles.boxs}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
            </View>
            <Text style={styles.textmasuk}>Tetap Masuk</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnforgot}>Forgot Password?</Text>
          </TouchableWithoutFeedback>
        </View>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <View style={styles.btnSigin}>
            <Text style={styles.texsigin}>Sign In</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.divider}>
          <View style={styles.line}></View>
          <Text style={styles.textor}>Or</Text>
          <View style={styles.line}></View>
        </View>

        <TouchableWithoutFeedback>
          <View style={styles.btnsocialgoogle}>
            <View style={styles.iconBtn}>
              <Image
                source={icons.Google}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"></Image>
            </View>

            <Text style={{fontWeight: 'bold', color: '#092C4C', fontSize: 16}}>
              Continue with Google
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.btnsocialfb}>
            <View style={styles.iconBtn}>
              <Image
                source={icons.Facebook}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"></Image>
            </View>

            <Text style={{fontWeight: 'bold', color: '#092C4C', fontSize: 16}}>
              Continue with Facebook
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.footer}>
          <Text>Don’t Have an Account? </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Register')}>
            <Text style={{fontWeight: 'bold', color: 'red', fontSize: 18}}>
              Sign Up
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },

  containerlogo: {
    height: 55,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
    marginBottom: 40,
  },

  containercheckbox: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
  },

  checkboxs: {flexDirection: 'row', flex: 1, alignItems: 'center'},
  boxs: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textmasuk: {marginLeft: 8},
  btnforgot: {fontWeight: '500', color: 'red', fontSize: 14},
  btnSigin: {
    height: 56,
    marginHorizontal: 16,
    backgroundColor: '#007AFF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 74,
  },
  texsigin: {fontWeight: 'bold', color: 'white', fontSize: 16},
  divider: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  line: {height: 1, backgroundColor: '#AAAAAA', flex: 1},
  textor: {marginHorizontal: 16, color: '#AAAAAA', fontSize: 14},
  btnsocialgoogle: {
    height: 56,
    marginHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderColor: '#AAAAAA',
    borderWidth: 1,
    flexDirection: 'row',
  },
  btnsocialfb: {
    height: 56,
    marginHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderColor: '#AAAAAA',
    borderWidth: 1,
    flexDirection: 'row',
  },
  iconBtn: {height: 24, width: 24, marginRight: 8},
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
});
