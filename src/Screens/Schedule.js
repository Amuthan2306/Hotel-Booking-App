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
import BookingHeader from '../Components/BookingHeader';
import Schedulehotel from '../Components/Schedule';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Texts from '../Components/Text';

const Schedule = () => {
  const [selected, setSelected] = useState('');
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <SafeAreaView>
        <BookingHeader
          text="Schedule"
          source={require('../Assets/arrow-left.png')}
          image={require('../Assets/settings.png')}
        />
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
          style={{
            height: 350,
            elevation: 5,
          }}
          theme={{
            backgroundColor: Colors.white,
            calendarBackground: Colors.white,
            textSectionTitleColor: Colors.grey,
            selectedDayBackgroundColor: Colors.button,
            selectedDayTextColor: Colors.white,
            todayTextColor: Colors.white,
            dayTextColor: Colors.grey,
            textDisabledColor: Colors.grey,
            todayBackgroundColor: Colors.button,
            arrowColor: Colors.button,
          }}
        />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{Texts.PopularHotel}</Text>
          <Text style={styles.seeAll}>{Texts.Seeall}</Text>
        </View>
        <Schedulehotel />
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

export default Schedule;
