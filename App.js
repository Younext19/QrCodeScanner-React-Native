/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Linking,
  FlatList,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import QRCodeScan from './Components/QrCodeScan';
/*const App = () => {
  onSuccess = (e) => {
    console.log(e.data);
    reactivate();
  };
  return (
    <View style={{flex: 1}}>
      <QRCodeScanner
      showMarker={true}
        onRead={this.onSuccess}
        //flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};*/

const App = () => {
  const onread = (e) => {
    console.log(e.data);
    //Add QR To Flatlist

    //When Added To Flatlist we set count to true
  };

  return (
    <View style={{flex: 1}}>
      <QRCodeScanner
        showMarker={true}
        onRead={onread}
        reactivate={true}
        topContent={
          <Text style={styles.centerText}>
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
export default App;
