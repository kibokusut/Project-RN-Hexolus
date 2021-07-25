import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import {useEffect} from 'react/cjs/react.development';
import {images} from '../../../constants';

const Data = [
  {urlImg: images.banner2},
  {urlImg: images.banner2},
  {urlImg: images.banner2},
];

const Banner = () => {
  const intervalRef = useRef();
  const {width} = Dimensions.get('window');
  const scrollX = new Animated.Value(0);
  const dotPosition = Animated.divide(scrollX, width - 32);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      let widthBanner = width - 32;
      setSelectedIndex(
        selectedIndex === Data.length - 1 ? 0 : selectedIndex + 1,
      );
      intervalRef.current.scrollTo({
        animated: selectedIndex === 0 ? false : true,
        y: 0,
        x: widthBanner * selectedIndex,
      });
    }, 3000);
    return () => clearInterval(id);
  });
  const autoPlay = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width - 32;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(selectIndex);
  };
  return (
    <SafeAreaView style={{paddingHorizontal: 16}}>
      <Animated.ScrollView
        style={{width: width - 32}}
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

export default Banner;

const style = StyleSheet.create({
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
