import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from './Colors';
import Texts from './Text';

const Schedulehotel = () => {
  const Schedulehotel = [
    {
      id: '1',
      name: 'Asteria Hotel',
      date: '19/March/2024',
      price: 165.3,
      image: require('../Assets/house.png'),
      arrow: require('../Assets/arrow-rights.png'),
      calendar: require('../Assets/calendar.png'),
    },
    {
      id: '1',
      name: 'Golden Palace Hotel',
      date: '20/March/2024',
      price: 175.3,
      image: require('../Assets/house.png'),
      arrow: require('../Assets/arrow-rights.png'),
      calendar: require('../Assets/calendar.png'),
    },
  ];

  const renderItemSchedulehotel = ({item}) => (
    <View style={styles.hotelCard2}>
      <Image source={item.image} style={styles.hotelImage2} />
      <View style={styles.hotelInfo2}>
        <View style={styles.hotelTextContainer}>
          <Text style={styles.hotelName2}>{item.name}</Text>
          <View style={styles.ratingview}>
            <View style={styles.calview}>
              <Image source={item.calendar} style={styles.calendarImage} />
              <Text style={styles.hotelLocation}>{item.date}</Text>
            </View>
            <Image source={item.arrow} style={styles.haertImage} />
          </View>
        </View>
        <View style={styles.hotelPriceRating}>
          <Text style={styles.hotelPrice2}>
            ${item.price} /{Texts.night}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={Schedulehotel}
        renderItem={renderItemSchedulehotel}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hotelLocation: {
    color: Colors.grey,
    fontSize: 14,
  },
  haertImage: {
    height: 25,
    width: 25,
  },
  hotelCard2: {
    width: '100%',
    borderRadius: 10,
    marginRight: 10,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  hotelImage2: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  hotelInfo2: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  hotelTextContainer: {
    marginBottom: 10,
  },
  hotelName2: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  hotelPriceRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hotelPrice2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.button,
  },
  ratingContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating2: {
    marginLeft: 5,
    fontSize: 14,
  },
  ratingview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calendarImage: {
    height: 16,
    width: 16,
    tintColor: Colors.grey,
    marginRight: 5,
  },
  calview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Schedulehotel;
