import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, SafeAreaView, ScrollView, FlatList, Alert, RefreshControl, KeyboardAvoidingView, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';


import getImageForWeather from '../utils/getImageForWeather';
import getIconForWeather from '../utils/getIconForWeather';
// import image from '../assets/clear.png';

// import { openWeatherKey } from './Secrets';
// const openWeatherKey = '878a5089e2df0b4c044936a92104191e';
const openWeatherKey = '02e36843da79d4838d1a02a8e15b8c9a';
let url = `https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid=${openWeatherKey}`;


function Weather(){

//   const [forecast, setForecast] = useState(null);
//   const [refreshing, setRefreshing] = useState(false);
  const [weather, setWeather] = useState('Clear');

//   const loadForecast = async () => {
//     setRefreshing(true);

//     // const { status } = await Location.requestPermissionsAsync();
//     const { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission to access location was denied');
//     }

//     let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=536fc8624c2e6499524501c02319057d&units=imperial`)
//     const data = await response.json();

//     if(!response.ok) {
//       Alert.alert(`Error retrieving weather data: ${data.message}`); 
//     } else {
//       setForecast(data);
//         setWeather(data.weather[0].main);
//     }

//     setRefreshing(false);
//   }

//   useEffect(() => { 
//     if (!forecast) {
//       loadForecast(); 
//     }
//   })

//   if (!forecast) {
//     return <SafeAreaView style={styles.loading}>
//       <ActivityIndicator size="large" />
//       </SafeAreaView>;
//   }

//   const current = forecast.weather[0];
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      {/* <ScrollView 
        refreshControl={
          <RefreshControl 
            onRefresh={() => {  loadForecast() }} 
            refreshing={refreshing}
          />}
      > */}
      <ImageBackground source={getImageForWeather(weather)} style={styles.imageContainer} imageStyle={styles.image}>

      <StatusBar style={styles.status} animated={true} barStyle='light-content'/>
        <Text style={styles.title}>White Center</Text>
        <View style={styles.current}>
          {/* <Image
            style={styles.largeIcon}
            source={{
                uri: `http://openweathermap.org/img/wn/${current.icon}@4x.png`,
            }}
        /> */}
          {/* <Text style={styles.currentTemp}>{Math.round(forecast.main.temp)}°F</Text> */}
          <Text style={[styles.largeText, styles.textStyle]}>{getIconForWeather(weather)}</Text>
          <Text style={[styles.currentTemp, styles.textStyle]}>38 °F</Text>
          {/* <Text style={[styles.currentDescription, styles.textStyle]}>Main: Clouds</Text> */}
          {/* <Text style={[styles.currentDescription, styles.textStyle]}>Overcast clouds</Text> */}
          {/* <Text>{forecast.name}</Text> */}
        </View>
        
        {/* <Text style={styles.currentDescription}>{current.description}</Text> */}
      {/* </ScrollView> */}
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
    fontSize: 30,
    color: '#02111B',
    marginTop: 30,
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
  current: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
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
    width: 250,
    height: 200,
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
  },
  largeText: {
    fontSize: 44,
  }
});

export default Weather;
