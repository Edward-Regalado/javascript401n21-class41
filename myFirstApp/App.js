// import  { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';

import React, {useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location';

import Home from './src/home';
import Details from './src/details';

import { OPEN_WEATHER_API } from '@env';

const Stack = createNativeStackNavigator();

export default function App(){

  const [forecast, setForecast] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [weather, setWeather] = useState('');
  // const [weather, setWeather] = useState('Clear');
  // const [weather, setWeather] = useState('Snow');
  // const [weather, setWeather] = useState('Rain');
  // const [weather, setWeather] = useState('Drizzle');
  // const [weather, setWeather] = useState('Snow');
  // const [weather, setWeather] = useState('Clouds');

  const loadForecast = async () => {
    setRefreshing(true);

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    // setLocation(location);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_API}&units=imperial`);

    const data = await response.json();

    if(!response.ok) {
      Alert.alert(`Error retrieving weather data: ${data.message}`); 
    } else {
      setWeather(data.weather[0].main);
      setForecast(data);
    }

    setRefreshing(false);
  }

  useEffect(() => { 
    if (!forecast) {
      loadForecast(); 
    }
  })

  if (!forecast) {
    return <SafeAreaView style={styles.loading}>
      <ActivityIndicator size="large" />
      </SafeAreaView>;
  }

  // const current = forecast.weather[0];
  
  return ( 
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          initialParams={{weather: weather, forecast: forecast}}
          // options={{ title:  'Welcome'}}
        />
        <Stack.Screen 
          name='Details'
          component={Details}
          initialParams={{weather: weather, forecast: forecast}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});