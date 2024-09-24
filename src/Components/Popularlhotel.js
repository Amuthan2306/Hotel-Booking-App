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

const Popularhotel = () => {
  const popularHotels = [
    {
      id: '1',
      name: 'Asteria Hotel',
      location: 'Wilora NT 0872, Australia',
      price: 165.3,
      rating: 5.0,
      image: require('../Assets/house.png'),
      star: require('../Assets/star.png'),
    },
    {
      id: '1',
      name: 'Asteria Hotel',
      location: 'Wilora NT 0872, Australia',
      price: 165.3,
      rating: 5.0,
      image: require('../Assets/house.png'),
      star: require('../Assets/star.png'),
    },
  ];

  const renderItempopularhotel = ({item}) => (
    <View style={styles.hotelCard2}>
      <Image source={item.image} style={styles.hotelImage2} />
      <View style={styles.hotelInfo2}>
        <View style={styles.hotelTextContainer}>
           <View style={styles.ratingview}>
          <Text style={styles.hotelName2}>{item.name}</Text>
          <View style={styles.ratingContainer2}>
            <Image source={item.star} style={styles.haertImage} />
            <Text style={styles.rating2}>{item.rating}</Text>
          </View>
          </View>
          <Text style={styles.hotelLocation}>{item.location}</Text>
        </View>
        <View style={styles.hotelPriceRating}>
          <Text style={styles.hotelPrice2}>${item.price} /{Texts.night}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        horizontal
        data={popularHotels}
        renderItem={renderItempopularhotel}
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
    marginVertical:10
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
    color: Colors.button
  },
  ratingContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating2: {
    marginLeft: 5,
    fontSize: 14,
  },
  ratingview:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});

export default Popularhotel;
