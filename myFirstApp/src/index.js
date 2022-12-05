import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, SafeAreaView, ScrollView, FlatList, Alert, RefreshControl, KeyboardAvoidingView, ImageBackground, Platform } from 'react-native';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

import getImageForWeather from '../utils/getImageForWeather';
import getIconForWeather from '../utils/getIconForWeather';

import { OPEN_WEATHER_API } from '@env';


function Weather(){

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

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_API}&units=imperial`);

    const data = await response.json();

    if(!response.ok) {
      Alert.alert(`Error retrieving weather data: ${data.message}`); 
    } else {
      setForecast(data);
        setWeather(data.weather[0].main);
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

  const current = forecast.weather[0];
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <ImageBackground source={getImageForWeather(weather)} style={styles.imageContainer} imageStyle={styles.image}>
        <StatusBar style={styles.status} animated={true} barStyle='light-content'/>
        <View style={styles.currentContainer}>
          <View style={styles.currentTempContainer}>
            <Text style={styles.title}>{forecast.name}</Text>
            <Text style={[styles.largeIcon, styles.textStyle]}>{getIconForWeather(weather)}</Text>
            <Text style={[styles.currentTemp, styles.textStyle]}>{Math.round(forecast.main.temp)}F</Text>
            <Text style={[styles.currentTemp, styles.textStyle]}>{current.main}</Text>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#61dafb',
  },
  status: {
    backgroundColor: '#61dafb',
    // barStyle: hidden,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 36,
    // color: '#02111B',
    color: 'white',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 24,
    marginVertical: 12,
    marginLeft: 4,
    color: '#02111B',
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
  },
  currentTempContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  currentTemp: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  currentCity: {
    fontSize: 24,
    marginTop: 15,
  },
  currentDescription: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 24,
    marginBottom: 24
  },
  hour: {
    padding: 6,
    alignItems: 'center',
  },
  day: {
    flexDirection: 'row',
  },
  dayDetails: {
    justifyContent: 'center',
  },
  dayTemp: {
    marginLeft: 12,
    alignSelf: 'center',
    fontSize: 20
  },
  largeIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  smallIcon: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  }
});

export default Weather;
