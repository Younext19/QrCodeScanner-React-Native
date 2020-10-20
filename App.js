/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import QRCodeScan from './Components/QrCodeScan';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <QRCodeScan />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
