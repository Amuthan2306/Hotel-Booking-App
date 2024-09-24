import React, {useEffect} from 'react';
import {Image, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation} from '@react-navigation/native';
import Colors from '../Components/Colors';

const InitialScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Image
        style={styles.logo}
        source={require('../Assets/splash_screen.png')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
});
export default InitialScreen;
