import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import Colors from '../Components/Colors';
import BookingHeader from '../Components/BookingHeader';
import Texts from '../Components/Text';
import {useNavigation} from '@react-navigation/native';

const BookingDetails = props => {
  const hotelId = props?.route?.params?.hotelId;
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <SafeAreaView>
        <BookingHeader
          text="Detail"
          source={require('../Assets/arrow-left.png')}
          image={require('../Assets/mores.png')}
        />
        {hotelId === '1' ? (
          <ImageBackground
            borderRadius={10}
            source={require('../Assets/house.png')}
            style={styles.hotelImage}>
            <TouchableOpacity style={styles.heartIcon}>
              <Image
                source={require('../Assets/heart.png')}
                style={styles.haertImage}
              />
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <ImageBackground
            borderRadius={10}
            source={require('../Assets/hall.png')}
            style={styles.hotelImage}>
            <TouchableOpacity style={styles.heartIcon}>
              <Image
                source={require('../Assets/heart.png')}
                style={styles.haertImage}
              />
            </TouchableOpacity>
          </ImageBackground>
        )}
        <View style={styles.wifiview}>
          <View style={styles.wifi}>
            <Image
              source={require('../Assets/wifi.png')}
              style={styles.haertImage}
            />
            <Text style={styles.wifitext}>{Texts.wifi}</Text>
          </View>
          <View style={styles.wifi}>
            <Image
              source={require('../Assets/cofees.png')}
              style={styles.haertImage}
            />
            <Text style={styles.wifitext}>{Texts.FreeBreakfast}</Text>
          </View>
          <View style={styles.wifi}>
            <Image
              source={require('../Assets/star.png')}
              style={styles.haertImage}
            />
            <Text style={styles.wifitext}>{Texts.rating}</Text>
          </View>
        </View>
        <View style={styles.roomdetails}>
          <View style={styles.hotelname}>
            {hotelId === '1' ? (
              <Text style={styles.hoteltext}>{Texts.nearhotel}</Text>
            ) : (
              <Text style={styles.hoteltext}>{Texts.popoularhotel}</Text>
            )}
            {hotelId === '1' ? (
              <Text style={styles.hotelratetext}>{Texts.price}</Text>
            ) : (
              <Text style={styles.hotelratetext}>{Texts.price2}</Text>
            )}
          </View>
          <View style={styles.locationview}>
            <Image
              source={require('../Assets/location.png')}
              style={styles.locationimg}
            />
            {hotelId === '1' ? (
              <Text style={styles.location}>{Texts.nearhotel2}</Text>
            ) : (
              <Text style={styles.location}>{Texts.popoularhotellocate}</Text>
            )}
          </View>
        </View>
        <View style={styles.roomdescription}>
          <Text style={styles.hoteltext}>{Texts.Description}</Text>
          {hotelId === '1' ? (
            <Text style={styles.descriptiotext}>
              {Texts.Astonhotel}{' '}
              <Text style={styles.readmore}>{Texts.readmore}</Text>
            </Text>
          ) : (
            <Text style={styles.descriptiotext}>
              {Texts.goldenhotel}{' '}
              <Text style={styles.readmore}>{Texts.readmore}</Text>
            </Text>
          )}
        </View>
        <View style={styles.roomdescription}>
          <Text style={styles.hoteltext}>{Texts.Preview}</Text>
          <View style={styles.hotelname}>
            <Image
              source={require('../Assets/bedroom.png')}
              style={styles.previewImage}
            />
            <Image
              source={require('../Assets/hall.png')}
              style={styles.previewImage}
            />
            <Image
              source={require('../Assets/hall2.png')}
              style={styles.previewImage}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Booking Sucessfully'), navigation.goBack();
          }}
          style={styles.bookingbutton}>
          <Text style={styles.bookingtext}>{Texts.Booking}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
  },
  hotelImage: {
    width: '99%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 16,
  },
  heartIcon: {
    height: '30%',
    width: '95%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  haertImage: {
    height: 25,
    width: 25,
    marginRight: 5,
  },
  wifiview: {
    width: '98%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  wifi: {
    padding: 5,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.wifibtcolor,
    borderRadius: 5,
    flexDirection: 'row',
  },
  wifitext: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.black,
  },
  roomdetails: {
    width: '98%',
    alignSelf: 'center',
    marginVertical: 16,
  },
  hotelname: {
    width: '98%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  hoteltext: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
  hotelratetext: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.button,
  },
  locationview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    color: Colors.grey,
  },
  locationimg: {
    height: 20,
    width: 20,
    tintColor: Colors.button,
  },
  roomdescription: {
    width: '98%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  descriptiotext: {
    fontSize: 12,
    fontWeight: '300',
    color: Colors.grey,
    marginVertical: 10,
  },
  readmore: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.button,
  },
  previewImage: {
    height: 70,
    width: '30%',
    borderRadius: 10,
    marginVertical: 10,
  },
  bookingbutton: {
    padding: 15,
    width: '98%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.button,
    borderRadius: 10,
    marginVertical: 10,
  },
  bookingtext: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default BookingDetails;
