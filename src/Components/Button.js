import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const ButtonCompounds = props => {
  const {
    text,
    onpress,
    label,
    height,
    width,
    backgroundColor,
    color,
    source,
    tintColor,
  } = props;
  return (
    <TouchableOpacity
      onPress={onpress}
      style={{
        height: '75%',
        width: '30%',
        backgroundColor: backgroundColor,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <Image
        source={source}
        style={{height: 20, width: 20, tintColor: tintColor}}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          color: color,
          marginLeft: 5,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonCompounds;
