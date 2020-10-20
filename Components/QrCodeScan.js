import React, {Component} from 'react';
import {
  Linking,
  Text,
  TouchableOpacity,
  Alert,
  View,
  Modal,
  StyleSheet,
  Card,
  Button,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
// IMPORTANT TO ADD ON MANIFEST :
/*<uses-permission android:name="android.permission.VIBRATE"/>
  <uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
  Library Used : 
  https://github.com/react-native-camera/react-native-camera*/
const Cat = () => {
  // const [count, setCount] = useState(0);

  ifScanDone = (e) => {
    console.log(e);
  };
  return (
    <QRCodeScanner
      containerStyle={{backgroundColor: '#FFF', marginBottom: '35%'}}
      onRead={this.ifScanDone}
      reactivate={true}
      permissionDialogMessage="Need Permission To Access Camera"
      reactivateTimeout={10}
      showMarker={true}
      markerStyle={{borderColor: '#fff', borderRadius: 10}}
      bottomContent={
        <TouchableOpacity>
          <Text style={{fontSize: 21, color: 'rgb(0,122,255)'}}></Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    marginTop: 16,
  },
});

export default Cat;
