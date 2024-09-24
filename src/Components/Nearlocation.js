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
import {useNavigation} from '@react-navigation/native';
import Texts from './Text';

const Nearlocation = () => {
  const navigation = useNavigation();
  const hotelsNearYou = [
    {
      id: '1',
      name: Texts.nearhotel,
      location: Texts.nearhotel2,
      price: Texts.normalprice,
      rating: Texts.rating,
      image: require('../Assets/house.png'),
      heart: require('../Assets/heart.png'),
      star: require('../Assets/star.png'),
      emptyheart: require('../Assets/emptyheart.png'),
    },
    {
      id: '2',
      name: Texts.popoularhotel,
      location: Texts.popoularhotellocate,
      price: Texts.normalprice2,
      rating: Texts.rating2,
      image: require('../Assets/hall.png'),
      heart: require('../Assets/heart.png'),
      star: require('../Assets/star.png'),
      emptyheart: require('../Assets/emptyheart.png'),
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Booking', {hotelId: item.id})}
      style={styles.hotelCard}>
      <ImageBackground source={item.image} style={styles.hotelImage}>
        <TouchableOpacity style={styles.heartIcon}>
          <Image source={item.heart} style={styles.haertImage} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.hotelInfo}>
        <View style={styles.ratingview}>
          <Text style={styles.hotelName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Image source={item.star} style={styles.haertImage} />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        <Text style={styles.hotelLocation}>{item.location}</Text>
        <Text style={styles.hotelPrice}>
          ${item.price} / {Texts.night}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        horizontal
        data={hotelsNearYou}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hotelCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    position: 'relative',
    marginVertical: 10,
  },
  hotelImage: {
    width: '100%',
    height: 140,
  },
  hotelInfo: {
    padding: 10,
  },
  hotelName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.black,
  },
  hotelLocation: {
    color: Colors.grey,
    fontSize: 14,
  },
  hotelPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: Colors.button,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    color: Colors.black,
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
  },
  ratingview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Nearlocation;
