import * as React from 'react';
import {View, Text, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Colors from './Components/Colors';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import BookingDetails from './Screens/BookingDetails';
import Schedule from './Screens/Schedule';
import Texts from './Components/Text';
import InitialScreen from './Screens/InitialScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Bookmark() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{Texts.Bookmark}</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{Texts.Profile}</Text>
    </View>
  );
}

const TabBarIcon = ({name, focused}) => {
  const animatedScale = new Animated.Value(1);

  if (focused) {
    Animated.spring(animatedScale, {
      toValue: 1.7,
      friction: 1,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.spring(animatedScale, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View style={{transform: [{scale: animatedScale}]}}>
      <Icon
        name={name}
        size={24}
        color={focused ? Colors.button : Colors.grey}
      />
    </Animated.View>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'calendar-month' : 'calendar-month';
          } else if (route.name === 'Bookmark') {
            iconName = focused ? 'bookmark' : 'bookmark';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-outline' : 'account-outline';
          }
          return <TabBarIcon name={iconName} focused={focused} />;
        },
        tabBarLabel: ({focused}) => {
          if (focused) {
            return (
              <Text style={{marginLeft: 5, color: Colors.button, fontSize: 12}}>
                {route.name}
              </Text>
            );
          }
          return null;
        },
        tabBarActiveTintColor: Colors.button,
        tabBarInactiveTintColor: Colors.grey,
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="InitialScreen">
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="Booking" component={BookingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
