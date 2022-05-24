import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import formatDate from '../utils/formatDate';

const ItemHistory = ({data, date, onCopy}) => {
  return (
    <TouchableOpacity onPress={() => onCopy(data)} style={styles.container}>
      <Ionicons name="md-text" size={30} color="blue" />
      <View style={styles.containerContent}>
        <Text style={styles.dataText}>{data}</Text>
        <Text>{formatDate(date)}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  dateText: {
    alignSelf: 'flex-end',
  },
  dataText: {
    fontWeight: 'bold',
    color: 'black',
  },
  containerContent: {
    marginStart: 10,
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
  },
});
export default ItemHistory;
