import React, {useState} from 'react';

import {SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Starcolor, Starnocolor} from '../../../constants';

const Rating = () => {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  return (
    <SafeAreaView>
      <View style={{marginVertical: 24}}>
        <Text style={{marginBottom: 16, fontSize: 17, fontWeight: '700'}}>
          Beri Penilaian
        </Text>
        <View style={{flexDirection: 'row'}}>
          {maxRating.map((rate, index) => {
            return (
              <View
                key={index}
                style={{height: 32, width: 32, marginRight: 26}}>
                <TouchableWithoutFeedback
                  onPress={() => setDefaultRating(rate)}>
                  {rate <= defaultRating ? (
                    <Starcolor height={'100%'} width={'100%'} />
                  ) : (
                    <Starnocolor height={'100%'} width={'100%'} />
                  )}
                </TouchableWithoutFeedback>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rating;
