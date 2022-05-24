import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {goBack} from '../utils/navigation';
import {typeScan} from '../utils/constants';
const Header = ({title}) => {
  const renderIcon = () => {
    let iconName;
    switch (title) {
      case typeScan.URL: {
        iconName = 'md-link';
        break;
      }
      case typeScan.WIFI: {
        iconName = 'md-wifi';
        break;
      }
      case typeScan.EMAIL: {
        iconName = 'md-mail';
        break;
      }
      case typeScan.SMS: {
        iconName = 'md-chatboxes';
        break;
      }
      case typeScan.TEXT: {
        iconName = 'md-text';
        break;
      }
      default: {
        iconName = 'md-text';
      }
    }
    return <Ionicons name={iconName} size={30} color="black" />;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        {renderIcon()}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginStart: 4,
  },
  container: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Header;
