import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import {typeScan} from '../utils/constants';

const DataScanDetails = () => {
  const route = useRoute();
  const {data} = route.params;
  const [typeData, setTypeData] = useState('');

  const nameWifi = data.slice();
  useEffect(() => {
    if (data.includes('http')) {
      setTypeData(typeScan.URL);
    } else if (data.includes('MATMSG')) {
      setTypeData(typeScan.EMAIL);
    } else if (data.includes('WIFI')) {
      setTypeData(typeScan.WIFI);
    } else if (data.includes('SMSTO')) {
      setTypeData(typeData.SMS);
    } else {
      setTypeData(typeScan.TEXT);
    }
  }, []);
  const renderContent = () => {
    switch (typeData) {
      case typeScan.URL:
        return <Text>{data}</Text>;
      case typeScan.EMAIL:
        return <Text>{data}</Text>;
      case typeScan.WIFI:
        return (
          <View style={styles.containerContent}>
            <Text>
              Network name{' '}
              <Text style={styles.textBold}>
                {data.slice(data.indexOf('S') + 1, data.indexOf(';'))}
              </Text>
            </Text>
            <Text>
              Security type: <Text style={styles.textBold}>{data}</Text>
            </Text>
            <Text>
              Password: <Text style={styles.textBold}>{data.P}</Text>
            </Text>
          </View>
        );
      case typeScan.SMS:
        return <Text>{data}</Text>;
      default:
        return <Text>{data}</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <Header title={typeData} />
      <Text>Hello world</Text>
      {renderContent()}
    </View>
  );
};
const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold',
  },
  containerContent: {
    borderRadius: 8,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: '#f8f8f8',
  },
});
export default DataScanDetails;
