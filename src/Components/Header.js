import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Colors from './Colors';
import Texts from './Text';
const Header = () => {
  return (
    <View style={styles.locationContainer}>
      <View style={styles.locationview1}>
        <Text style={styles.currentLocationText}>{Texts.location}</Text>
        <View style={styles.locationview}>
          <Image
            source={require('../Assets/location.png')}
            style={styles.locationimg}
          />
          <Text style={styles.location}>{Texts.Aus}</Text>
        </View>
      </View>
      <View style={styles.notification}>
        <Image
          source={require('../Assets/notification.png')}
          style={styles.notificationimg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationContainer: {
    marginLeft: 5,
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentLocationText: {
    color: Colors.grey,
    fontSize: 14,
  },
  locationview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  locationimg: {
    height: 20,
    width: 20,
    tintColor: Colors.button,
  },
  notification: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: Colors.grey,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  notificationimg: {
    height: 40,
    width: 40,
    tintColor: Colors.grey,
  },
});

export default Header;
