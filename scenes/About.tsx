import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About screen</Text>
    </View>
  );
};

export default About;
