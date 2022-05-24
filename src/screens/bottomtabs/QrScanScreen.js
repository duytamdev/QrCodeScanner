import React from 'react';
import {Alert, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants';
import {useDispatch} from 'react-redux';
import {addHistory} from '../../redux/historySlice';
const QrScanScreen = () => {
  const dispatch = useDispatch();
  const onSuccess = e => {
    dispatch(
      addHistory({
        date: new Date(),
        data: e.data,
      }),
    );
    Alert.alert('Result', e.data, [{text: 'OK'}]);
  };
  return (
    <View>
      <QRCodeScanner
        reactivate={true}
        reactivateTimeout={3000}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={
          'We need your permission to use your camera phone'
        }
        showMarker
        onRead={onSuccess}
        cameraStyle={{height: SCREEN_HEIGHT}}
        customMarker={
          <BarcodeMask
            width={SCREEN_WIDTH * 0.7}
            height={SCREEN_WIDTH * 0.7}
            edgeColor={'#62B1F6'}
            showAnimatedLine={true}
          />
        }
      />
    </View>
  );
};
export default QrScanScreen;
