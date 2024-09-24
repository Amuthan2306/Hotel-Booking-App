import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Colors from '../Components/Colors';
import Header from '../Components/Header';
import ButtonCompounds from '../Components/Button';
import Nearlocation from '../Components/Nearlocation';
import Popularhotel from '../Components/Popularlhotel';
import Texts from '../Components/Text';

const Home = () => {
  const [hotel, sethotel] = useState(true);
  const [homestay, sethomestay] = useState(false);
  const [apart, setapart] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <SafeAreaView>
        <Header />
        <View style={styles.button}>
          <ButtonCompounds
            backgroundColor={hotel ? Colors.button : Colors.invisiblebutton}
            onpress={() => {
              sethotel(true), sethomestay(false), setapart(false);
            }}
            text="Hotel"
            color={hotel ? Colors.white : Colors.grey}
            source={require('../Assets/hotel.png')}
            tintColor={hotel ? Colors.white : Colors.grey}
          />
          <ButtonCompounds
            backgroundColor={homestay ? Colors.button : Colors.invisiblebutton}
            onpress={() => {
              sethomestay(true), setapart(false), sethotel(false);
            }}
            text="HomeStay"
            color={homestay ? Colors.white : Colors.grey}
            source={require('../Assets/homestay.png')}
            tintColor={homestay ? Colors.white : Colors.grey}
          />
          <ButtonCompounds
            backgroundColor={apart ? Colors.button : Colors.invisiblebutton}
            onpress={() => {
              setapart(true), sethotel(false), sethomestay(false);
            }}
            text="Apart"
            color={apart ? Colors.white : Colors.grey}
            source={require('../Assets/apart.png')}
            tintColor={apart ? Colors.white : Colors.grey}
          />
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{Texts.NearLocation}</Text>
          <Text style={styles.seeAll}>{Texts.Seeall}</Text>
        </View>
        <Nearlocation />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{Texts.PopularHotel}</Text>
          <Text style={styles.seeAll}>{Texts.Seeall}</Text>
        </View>
        <Popularhotel />
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
  button: {
    height: '10%',
    marginVertical: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  seeAll: {
    color: Colors.button,
  },
});

export default Home;
