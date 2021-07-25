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
import {useEffect} from 'react/cjs/react.development';
import {images} from '../../../constants';

const Data = [
  {urlImg: images.paketvps},
  {urlImg: images.paketvps},
  {urlImg: images.paketvps},
];

const PaketVps = () => {
  const intervalRef = useRef();
  const {width} = Dimensions.get('window');
  const scrollX = new Animated.Value(0);
  const dotPosition = Animated.divide(scrollX, width - 32);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoPlay = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width - 32;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(selectIndex);
  };
  return (
    <SafeAreaView style={{paddingHorizontal: 16}}>
      <View style={style.titleContainer}>
        <Text style={style.subtitle}>Paket VPS/Dedicated</Text>
        <Text style={style.titlemore}>Lihat Semua</Text>
      </View>

      <Animated.ScrollView
        ref={intervalRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={autoPlay}
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
            <View key={k} style={[style.cardbanner, {width: width - 32}]}>
              <Image
                source={d.urlImg}
                resizeMode="stretch"
                style={style.imagebanner}></Image>
            </View>
          );
        })}
      </Animated.ScrollView>
      <View style={style.containerdots}>
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
              style={[
                {
                  width: dotSize,
                  backgroundColor: dotColor,
                },
                style.dotitem,
              ]}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default PaketVps;

const style = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 17,
    color: '#092C4C',
    fontWeight: 'bold',
  },
  titlemore: {fontSize: 12, color: '#007AFF'},
  cardbanner: {
    height: 164,
    paddingHorizontal: 5,
  },
  imagebanner: {
    width: '100%',
    height: '100%',
  },
  containerdots: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
  },
  dotitem: {
    borderRadius: 8,
    marginHorizontal: 6,
    height: 8,
  },
});
