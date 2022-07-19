import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import Card from '../components/Card';
import {RootStackParamList} from '../types/StackParamList';
import type {RouteProp} from '@react-navigation/native';

type ReviewDetailsRouteProp = NativeStackScreenProps<
  RootStackParamList,
  'ReviewDetails'
>;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const images: {ratings: {[details: string]: any}} = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  },
};
const ReviewDetails = ({route}: ReviewDetailsRouteProp) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[route.params.rating.toString()]} />
        </View>
      </Card>
    </View>
  );
};

export default ReviewDetails;
