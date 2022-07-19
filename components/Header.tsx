import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        name="user"
        style={styles.icon}
        size={30}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <View style={styles.iconContainer}>
        <Text style={styles.title}>GameZone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 6,
    marginBotom: 6,
    marginLeft: 6,
  },
  iconContainer: {
    borderColor: 'black',
    borderRadius: 50,
    marginRight: 10,
  },
  icon: {
    padding: 5,
  },
});

export default Header;
