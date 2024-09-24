import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Colors from './Colors';
import {useNavigation} from '@react-navigation/native';

const BookingHeader = props => {
  const navigation = useNavigation();
  const {text, onpress, source, image} = props;
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.arrowview}>
        <Image source={source} style={styles.arrowstyle} />
      </TouchableOpacity>
      <Text style={styles.detailtext}>{text}</Text>
      <View style={styles.arrowview}>
        <Image source={image} style={styles.arrowstyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // borderWidth: 1,
    width: '98%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  arrowview: {
    height: 40,
    width: 40,
    borderWidth: 0.5,
    borderColor: Colors.grey,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowstyle: {
    height: 24,
    width: 24,
  },
  detailtext: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
  },
});
export default BookingHeader;
