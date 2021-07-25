import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from 'react-native';

import {images} from './../../constants';
const Data = [
  {urlImg: images.logo, title: 'Selamat Datang di Sanjaya Hosting'},
  {urlImg: images.onboard1, title: 'Dapatkan domain Dengan Harga murah'},
  {urlImg: images.onboard2, title: 'Hosting premium dan website cepat'},
];

const GetStarted = ({navigation}) => {
  const intervalRef = useRef();
  const {width} = Dimensions.get('window');
  const scrollX = new Animated.Value(0);
  const dotPosition = Animated.divide(scrollX, width);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const Nextt = () => {
    setSelectedIndex(prev => prev + 1);
    if (selectedIndex === 3) {
      navigation.navigate('Home');
    }
    intervalRef.current.scrollTo({
      animated: true,
      y: 0,
      x: width * selectedIndex,
    });
  };

  const handleSelected = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(selectIndex + 1);
  };

  return (
    <SafeAreaView style={style.container}>
      <Animated.ScrollView
        ref={intervalRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleSelected}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {x: scrollX}},
            },
          ],
          {useNativeDriver: false},
        )}>
        {Data.map((d, k) => {
          return (
            <View key={k} style={style.containerOnboard}>
              <View style={style.imageOnboard}>
                <Image
                  source={d.urlImg}
                  style={{width: '100%'}}
                  resizeMode="contain"></Image>
              </View>
              <Text style={style.headerTitleOnboard}>{d.title}</Text>
              <Text style={style.subtitleOnboard}>
                Dimsum is a traditional Chinese food that has existed since the
                Han Dynasty
              </Text>
            </View>
          );
        })}
      </Animated.ScrollView>
      <View style={style.containerDots}>
        {Data.map((item, index) => {
          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [8, 24, 8],
            extrapolate: 'clamp',
          });
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['#DDEEDD', '#007AFF', '#DDEEDD'],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={{
                borderRadius: 8,
                marginHorizontal: 6,
                width: dotSize,
                height: 8,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>

      <View style={style.containerButton}>
        {selectedIndex > 1 ? (
          <>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Home')}>
              <View style={style.buttonSkip}>
                <Text style={style.buttonSkipText}>Skip</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Nextt}>
              <View style={style.button}>
                <Text style={style.buttonNextText}>Next</Text>
              </View>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <TouchableWithoutFeedback onPress={Nextt}>
            <View style={style.button}>
              <Text style={style.buttonStartedText}>Get Started</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerOnboard: {
    width: Dimensions.get('window').width,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageOnboard: {
    height: 336,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleOnboard: {
    fontSize: 27,
    color: '#092C4C',
    textAlign: 'center',
    marginHorizontal: 50,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  subtitleOnboard: {
    fontSize: 16,
    color: '#AAAAAA',
    paddingVertical: 20,
    textAlign: 'center',
    marginHorizontal: 60,
  },

  containerButton: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#007AFF',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    flex: 1,
  },
  buttonSkip: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 6,
    flex: 1,
  },
  buttonSkipText: {
    color: '#AAAAAA',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 50,
  },
  buttonNextText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonStartedText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  containerDots: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});
