import React, {useEffect, useState, useCallback} from 'react';
import {Text, View, StyleSheet, ToastAndroid, Linking} from 'react-native';
import {colors} from '../../utils/colors';
import ItemHistory from '../../components/ItemHistory';
import {useIsFocused} from '@react-navigation/native';
import Storage from '../../utils/storage';
import {HISTORIES_KEY} from '../../utils/constants';
import Clipboard from '@react-native-clipboard/clipboard';
const HistoryScreen = () => {
  const isFocused = useIsFocused();
  const [histories, setHistories] = useState([]);
  const handleCopyToClipboard = useCallback(data => {
    try {
      Linking.openURL(data).catch(err => {
        Clipboard.setString(data),
          ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    Storage.getItem(HISTORIES_KEY).then(res => {
      setHistories(res.reverse());
    });
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      {histories?.length > 0 ? (
        <View style={styles.itemsContainer}>
          {histories.map((item, index) => {
            return (
              <ItemHistory
                onCopy={handleCopyToClipboard}
                key={index}
                date={item.date}
                data={item.data}
              />
            );
          })}
        </View>
      ) : (
        <View style={styles.containerEmpty}>
          <Text style={styles.text}>No history</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  containerEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
  },
  itemsContainer: {
    borderRadius: 8,
    margin: 5,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 16,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
});
export default HistoryScreen;
